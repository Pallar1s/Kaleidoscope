export const bufferAFragmentShader = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`

export const imageFragmentShader = `
precision highp float;
uniform vec2 u_resolution;
uniform sampler2D iChannel0;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  gl_FragColor = texture2D(iChannel0, uv);
}
`

export const channels = {
  buffera: {},
  image: { iChannel0: 'buffera' }
}
