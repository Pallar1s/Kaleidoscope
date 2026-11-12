export const channelSources = {
  iChannel0: 'emission'
}

export const abstractFlowFragmentShader = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_jointEmissionStrength;
uniform sampler2D iChannel0;

vec2 stanh(vec2 a) {
    return tanh(clamp(a, -40.,  40.));
}

void main() {
    vec2 u = gl_FragCoord.xy;
    vec2 v = u_resolution.xy;
    u = 0.2*(u+u-v)/v.y;    
     
    vec4 z = vec4(1,2,3,0);
    vec4 o = z;
     
    for (float a = .5, t = u_time, i = 0.; 
         i < 19.; 
         i++,
         o += (1. + cos(z+t)) 
            / length((1.+i*dot(v,v)) 
                   * sin(1.5*u/(.5-dot(u,u)) - 9.*u.yx + t))
        )  
        v = cos(++t - 7.*u*pow(a += .03, i)) - 5.*u, 
        u += tanh(40. * dot(u *= mat2(cos(i + .02*t - z.wxzw*11.))
                           ,u)
                      * cos(1e2*u.yx + t)) / 2e2
           + .2 * a * u
           + cos(4./exp(dot(o,o)/1e2) + t) / 3e2;
              
    o = 25.6 / (min(o, 13.) + 164. / o) 
       - dot(u, u) / 250.;

    vec2 emissionUv = gl_FragCoord.xy / u_resolution.xy;
    vec2 emissionTexel = 2.0 / u_resolution.xy;
    vec4 emission = texture(iChannel0, emissionUv);
    emission += 0.35 * texture(iChannel0, emissionUv + vec2(emissionTexel.x, 0.0));
    emission += 0.35 * texture(iChannel0, emissionUv - vec2(emissionTexel.x, 0.0));
    emission += 0.35 * texture(iChannel0, emissionUv + vec2(0.0, emissionTexel.y));
    emission += 0.35 * texture(iChannel0, emissionUv - vec2(0.0, emissionTexel.y));
    emission /= 2.4;

    float emissionStrength = smoothstep(0.0, 0.4, emission.a)
                           * u_jointEmissionStrength;
    o.rgb *= 1.0 + 0.15 * emissionStrength;
    o.rgb += 1.35 * emission.rgb * emissionStrength;
    
    gl_FragColor = o;
}
`
