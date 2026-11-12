import {
  bufferAFragmentShader,
  bufferBFragmentShader,
  bufferCFragmentShader,
  common,
  imageFragmentShader
} from './fluidSim.js'

export {
  bufferAFragmentShader,
  bufferBFragmentShader,
  bufferCFragmentShader,
  common,
  imageFragmentShader
}

export const bufferDFragmentShader = `
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform vec2 u_resolution;
uniform float u_time;
uniform int u_frame;
uniform vec4 u_mouse;

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
    vec3 p = getPalette(-x, vec3(0.2, 0.5, .7), vec3(.9, 0.4, 0.1), vec3(1., 1.2, .5), vec3(1., -0.4, -.0));
    return vec4(p, 1.);
}

vec4 pal2(float x)
{
    vec3 p = getPalette(-x, vec3(0.4, 0.3, .5), vec3(.9, 0.75, 0.4), vec3(.1, .8, 1.3), vec3(1.25, -0.1, .1));
    return vec4(p, 1.);
}

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec2 mo = u_mouse.xy/u_resolution.xy;
    vec2 w = 1.0/u_resolution.xy;

    vec2 velo = textureLod(iChannel0, uv, 0.).xy;
    vec4 col = textureLod(iChannel1, uv-dt*velo*w*3., 0.);

    if (gl_FragCoord.y < 1. && gl_FragCoord.x < 1.)
        col = vec4(0);

    vec4 lastMouse = texelFetch(iChannel1, ivec2(0,0), 0).xyzw;

    if (u_mouse.z > 1. && lastMouse.z > 1.)
    {
        float str = smoothstep(-.5,1.,length(mo-lastMouse.xy/u_resolution.xy));
        col += str*0.0009/(pow(length(uv-mo),1.7)+0.002)*pal2(-u_time*0.7);
    }

    col += .0007/(0.0005+pow(length(uv-point1(u_time)),1.75))*dt*0.12*pal(u_time*0.05);
    col += .0007/(0.0005+pow(length(uv-point2(u_time)),1.75))*dt*0.12*pal2(u_time*0.05+0.675);

    for (int i = 0; i < MAX_JOINT_EMITTERS; i++)
    {
        if (i >= u_jointCount) break;

        vec4 joint = u_joints[i];
        vec2 jointPosition = vec2(joint.x/u_resolution.x, 1.0-joint.y/u_resolution.y);
        vec2 jointVelocity = vec2(joint.z/u_resolution.x, joint.w/u_resolution.y);
        float distanceToJoint = length(uv-jointPosition);
        float speedBoost = 0.75+clamp(length(jointVelocity)*0.35, 0.0, 0.75);
        float emission = 0.00003/(0.0003+pow(distanceToJoint, 1.7));
        vec3 color = mix(u_jointColors[i].rgb, pal(float(i)*0.23-u_time*0.035).rgb, 0.22);

        col += emission*speedBoost*u_jointColors[i].a*vec4(color, 1.0);
    }

    vec4 stroke = textureLod(iChannel2, uv, 0.0);
    float strokeStrength = smoothstep(0.01, 0.95, stroke.a);
    float flowBoost = 0.7+0.12*clamp(length(velo), 0.0, 2.5);
    col += flowBoost*strokeStrength*vec4(stroke.rgb, 1.0);

    if (u_frame < 20)
    {
        col = vec4(0.);
    }

    col = clamp(col, 0.,5.);
    col = max(col-(0.0001+col*0.004)*0.5, 0.);

    if (gl_FragCoord.y < 1. && gl_FragCoord.x < 1.)
        col = u_mouse;

    gl_FragColor = col;
}
`

export const channels = {
  buffera: { iChannel0: 'bufferc' },
  bufferb: { iChannel0: 'buffera' },
  bufferc: { iChannel0: 'bufferb' },
  bufferd: { iChannel0: 'buffera', iChannel1: 'bufferd', iChannel2: 'emission' },
  image: { iChannel0: 'bufferd' }
}

export const samplers = {
  buffera: { iChannel0: { filter: 'linear', wrap: 'repeat' } },
  bufferb: { iChannel0: { filter: 'linear', wrap: 'repeat' } },
  bufferc: { iChannel0: { filter: 'linear', wrap: 'repeat' } },
  bufferd: {
    iChannel0: { filter: 'linear', wrap: 'clamp' },
    iChannel1: { filter: 'linear', wrap: 'repeat' },
    iChannel2: { filter: 'linear', wrap: 'clamp' }
  },
  image: { iChannel0: { filter: 'linear', wrap: 'repeat' } }
}
