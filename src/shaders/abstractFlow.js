export const channelSources = {
  iChannel0: 'trail'
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
    vec2 trailUv = gl_FragCoord.xy / u_resolution.xy;
    vec2 trailTexel = 3.0 / u_resolution.xy;
    vec4 trailCenter = texture(iChannel0, trailUv);
    vec4 trailLeft = texture(iChannel0, trailUv - vec2(trailTexel.x, 0.0));
    vec4 trailRight = texture(iChannel0, trailUv + vec2(trailTexel.x, 0.0));
    vec4 trailDown = texture(iChannel0, trailUv - vec2(0.0, trailTexel.y));
    vec4 trailUp = texture(iChannel0, trailUv + vec2(0.0, trailTexel.y));
    vec4 trailGlow = (trailCenter
                    + 0.35 * (trailLeft + trailRight + trailDown + trailUp)) / 2.4;
    float trailStrength = smoothstep(0.01, 0.35, trailGlow.a)
                        * u_jointEmissionStrength;
    vec2 trailGradient = vec2(trailRight.a - trailLeft.a,
                              trailUp.a - trailDown.a);

    vec2 u = gl_FragCoord.xy;
    vec2 v = u_resolution.xy;
    u = 0.2*(u+u-v)/v.y;
    u += 0.025 * trailGradient * u_jointEmissionStrength;
     
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

    float trailCore = smoothstep(0.02, 0.5, trailCenter.a)
                    * u_jointEmissionStrength;
    o.rgb *= 1.0 + 0.25 * trailStrength;
    o.rgb += 1.1 * trailGlow.rgb * trailStrength;
    o.rgb = mix(o.rgb,
                1.5 * trailCenter.rgb + 0.35 * o.rgb,
                0.65 * trailCore);
    
    gl_FragColor = o;
}
`
