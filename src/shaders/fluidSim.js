export const common = `
#version 300 es
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform int u_frame;
uniform vec4 u_mouse;

#define iTime u_time
#define iResolution u_resolution
#define iFrame u_frame
#define iMouse u_mouse

#define dt 0.15
#define USE_VORTICITY_CONFINEMENT

#define VORTICITY_AMOUNT 0.11

float mag2(vec2 p){return dot(p,p);}
vec2 point1(float t) {
    t *= 0.62;
    return vec2(0.12,0.5 + sin(t)*0.2);
}
vec2 point2(float t) {
    t *= 0.62;
    return vec2(0.88,0.5 + cos(t + 1.5708)*0.2);
}

vec4 solveFluid(sampler2D smp, vec2 uv, vec2 w, float time, vec3 mouse, vec3 lastMouse)
{
	const float K = 0.2;
	const float v = 0.55;
    
    vec4 data = texture(smp, uv);
    vec4 tr = texture(smp, uv + vec2(w.x , 0));
    vec4 tl = texture(smp, uv - vec2(w.x , 0));
    vec4 tu = texture(smp, uv + vec2(0 , w.y));
    vec4 td = texture(smp, uv - vec2(0 , w.y));
    
    vec3 dx = (tr.xyz - tl.xyz)*0.5;
    vec3 dy = (tu.xyz - td.xyz)*0.5;
    vec2 densDif = vec2(dx.z ,dy.z);
    
    data.z -= dt*dot(vec3(densDif, dx.x + dy.y) ,data.xyz);
    vec2 laplacian = tu.xy + td.xy + tr.xy + tl.xy - 4.0*data.xy;
    vec2 viscForce = vec2(v)*laplacian;
    data.xyw = texture(smp, uv - dt*data.xy*w).xyw;
    
    vec2 newForce = vec2(0);
    newForce.xy += 0.75*vec2(.0003, 0.00015)/(mag2(uv-point1(time))+0.0001);
    newForce.xy -= 0.75*vec2(.0003, 0.00015)/(mag2(uv-point2(time))+0.0001);
    
    if (mouse.z > 1. && lastMouse.z > 1.)
    {
        vec2 vv = clamp(vec2(mouse.xy*w - lastMouse.xy*w)*400., -6., 6.);
        newForce.xy += .001/(mag2(uv - mouse.xy*w)+0.001)*vv;
    }
    
    data.xy += dt*(viscForce.xy - K/dt*densDif + newForce);
    data.xy = max(vec2(0), abs(data.xy)-1e-4)*sign(data.xy);
    
    data.w = (tr.y - tl.y - tu.x + td.x);
    vec2 vort = vec2(abs(tu.w) - abs(td.w), abs(tl.w) - abs(tr.w));
    vort *= VORTICITY_AMOUNT/length(vort + 1e-9)*data.w;
    data.xy += vort;
    
    data.y *= smoothstep(.5,.48,abs(uv.y-0.5));
    
    data = clamp(data, vec4(vec2(-10), 0.5 , -10.), vec4(vec2(10), 3.0 , 10.));
    
    return data;
}
`

export const bufferAFragmentShader = `
uniform sampler2D iChannel0;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec2 w = 1.0/iResolution.xy;
    
    vec4 lastMouse = texture(iChannel0, vec2(0.5, 0.5) / iResolution.xy);
    vec4 data = solveFluid(iChannel0, uv, w, iTime, iMouse.xyz, lastMouse.xyz);
    
    // Увеличим начальные данные
    if (iFrame < 20)
    {
        data = vec4(5.0, 5.0, 2.0, 1.0);
    }
    
    if (gl_FragCoord.y < 1.)
        data = iMouse;
    
    gl_FragColor = data;
}
`

export const bufferBFragmentShader = `
uniform sampler2D iChannel0;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec2 w = 1.0/iResolution.xy;
    
    vec4 lastMouse = texture(iChannel0, vec2(0.5, 0.5) / iResolution.xy);
    vec4 data = solveFluid(iChannel0, uv, w, iTime, iMouse.xyz, lastMouse.xyz);
    
    // Увеличим начальные данные
    if (iFrame < 20)
    {
        data = vec4(5.0, 5.0, 2.0, 1.0);
    }
    
    if (gl_FragCoord.y < 1.)
        data = iMouse;
    
    gl_FragColor = data;
}
`

export const bufferCFragmentShader = `
uniform sampler2D iChannel0;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec2 w = 1.0/iResolution.xy;
    
    vec4 lastMouse = texture(iChannel0, vec2(0.5, 0.5) / iResolution.xy);
    vec4 data = solveFluid(iChannel0, uv, w, iTime, iMouse.xyz, lastMouse.xyz);
    
    // Увеличим начальные данные
    if (iFrame < 20)
    {
        data = vec4(5.0, 5.0, 2.0, 1.0);
    }
    
    if (gl_FragCoord.y < 1.)
        data = iMouse;
    
    gl_FragColor = data;
}
`

export const bufferDFragmentShader = `
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

vec3 getPalette(float x, vec3 c1, vec3 c2, vec3 p1, vec3 p2)
{
    float x2 = fract(x/2.0);
    x = fract(x);   
    mat3 m = mat3(c1, p1, c2);
    mat3 m2 = mat3(c2, p2, c1);
    float omx = 1.0-x;
    vec3 pws = vec3(omx*omx, 2.0*omx*x, x*x);
    return clamp(mix(m*pws, m2*pws, step(x2,0.5)),0.,1.);
}

vec4 pal(float x)
{
    vec3 pal = getPalette(-x, vec3(0.2, 0.5, .7), vec3(.9, 0.4, 0.1), vec3(1., 1.2, .5), vec3(1., -0.4, -.0));
    return vec4(pal, 1.);
}

vec4 pal2(float x)
{
    vec3 pal = getPalette(-x, vec3(0.4, 0.3, .5), vec3(.9, 0.75, 0.4), vec3(.1, .8, 1.3), vec3(1.25, -0.1, .1));
    return vec4(pal, 1.);
}

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec2 mo = iMouse.xy / iResolution.xy;
    vec2 w = 1.0/iResolution.xy;
    
    vec2 velo = texture(iChannel0, uv).xy;
    vec4 col = texture(iChannel1, uv - dt*velo*w*3.);
    
    if (iFrame < 20)
    {
        col = vec4(2.0, 1.0, 0.5, 1.0);
    }
    
    col = clamp(col, 0.,5.);
    col = max(col - (0.0001 + col*0.004)*.5, 0.);
    
    gl_FragColor = col;
}
`

export const imageFragmentShader = `
uniform sampler2D iChannel0;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec4 col = texture(iChannel0, uv);
    // Просто покажи col
    gl_FragColor = col;
}
`

// Маппинг как на ShaderToy:
// Buffer A: iChannel0 = C
// Buffer B: iChannel0 = A
// Buffer C: iChannel0 = B
// Buffer D: iChannel0 = A, iChannel1 = D
// Image: iChannel0 = D
export const channels = {
  buffera: { iChannel0: 'bufferc' },
  bufferb: { iChannel0: 'buffera' },
  bufferc: { iChannel0: 'bufferb' },
  bufferd: { iChannel0: 'buffera', iChannel1: 'bufferd' },
  image: { iChannel0: 'bufferd' }
}
