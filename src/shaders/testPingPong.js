export const common = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform int u_frame;
uniform vec4 u_mouse;

#define iTime u_time
#define iResolution u_resolution
#define iFrame u_frame
#define iMouse u_mouse
`

export const bufferAFragmentShader = `
uniform sampler2D iChannel0;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    
    vec4 prev = texture(iChannel0, uv);
    
    float gradient = uv.y + sin(u_time * 2.0) * 0.2;
    vec3 color = vec3(gradient * 0.5, gradient * 0.3, gradient);
    
    color = mix(prev.rgb, color, 0.1);
    
    if (u_frame < 5) {
        color = vec3(0.5, 0.0, 0.0);
    }
    
    gl_FragColor = vec4(color, 1.0);
}
`

export const imageFragmentShader = `
uniform sampler2D iChannel0;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec4 buf = texture(iChannel0, uv);
    gl_FragColor = vec4(buf.rgb, 1.0);
}
`

export const channels = {
  buffera: { iChannel0: 'self' },
  image: { iChannel0: 'buffera' }
}
