export const imageFragmentShader = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D iChannel0;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float gradient = uv.y + sin(u_time * 2.0) * 0.2;
  vec3 color = vec3(gradient * 0.5, gradient * 0.3, gradient);
  gl_FragColor = vec4(color, 1.0);
}
`
