export const channelSources = {
  iChannel0: 'trail'
}

export const nightSeaFragmentShader = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D iChannel0;

float cnoise(in vec2 uv)
{
    const mat2 r = mat2(-0.1288, -0.9917, 0.9917, -0.1288);

    vec2 s0 = cos(uv);
    vec2 s1 = cos(uv * 2.5 * r);
    vec2 s2 = cos(uv * 4.0 * r * r);

    vec2 s = s0 * s1 * s2;

    return (s.x + s.y) * 0.25 + 0.5;
}

#define S(x) (smoothstep(0.0, 1.0, (x)))

float fin(in vec2 uv)
{
    uv.x += S(S(S(abs(1.0 - 2.0 * fract(u_time * 0.02))))) - 0.5;
    
    uv *= vec2(sign(abs(1.0 - 2.0 * fract(u_time * 0.02 + 0.25)) - 0.5), 1.0) * 3.5;

    float d = smoothstep(1.5/u_resolution.y, 0.0,
                         uv.y
                         + 2.0 * uv.x * uv.x
                         + max(0.0, -(uv.y + 0.3) * (uv.y + 0.3) + uv.x * 3.0) * 5.0);

    return 1.0 - d * smoothstep(-0.4, -0.4 + 3.0/u_resolution.y,
                                uv.y + sin(u_time * 4.0 - uv.x * 16.0) / 100.0);
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (fragCoord - 0.5 * u_resolution.xy)
                / u_resolution.y;
    vec2 uv2 = fragCoord.xy / u_resolution.xy;
    
    // Trail background
    vec4 trail = texture(iChannel0, uv2);

    float dy = (smoothstep(0.0, -1.0, uv.y) * 40.0 + 1.5)
                / u_resolution.y;

    vec3 disp0 = vec3(0.5, 20.0, 8.0);
    vec3 disp1 = vec3(2.5, 60.0, 4.0);
    vec3 disp2 = vec3(5.0, 80.0, 2.0);
    vec3 disp3 = vec3(10.0, 20.0, 2.0);

    float avg = 0.0;
    avg += cnoise(uv * disp0.xy + u_time) * disp0.z - disp0.z * 0.5;
    avg += cnoise(uv * disp1.xy + u_time) * disp1.z - disp1.z * 0.5;
    avg += cnoise(uv * disp2.xy + u_time) * disp2.z - disp2.z * 0.5;
    avg += cnoise(uv * disp3.xy + u_time) * disp3.z - disp3.z * 0.5;
    avg /= 4.0;

    vec2 st = vec2(uv.x,
                   uv.y + clamp(avg * smoothstep(0.1, -1.0, uv.y), -0.1, 0.1));

    vec3 effect = mix(vec3(0.85, 0.55, 0.0),
                        vec3(0.90, 0.40, 0.0),
                        sqrt(abs(st.y * st.y * st.y)) * 28.0) * fin(uv)
                        * smoothstep(0.25 + dy, 0.25, length(st))
                        + smoothstep(2.0, 0.5, length(uv)) * 0.1;

    // Mix trail background with effect
    float centerRadius = 0.5;
    float distFromCenter = length(uv);
    float mixCoeff = mix(1.0, 0.0, smoothstep(centerRadius * 0.5, centerRadius, distFromCenter));

    vec3 color = mix(trail.rgb, effect, mixCoeff);

    gl_FragColor = vec4(color, 1.0);
}
`;