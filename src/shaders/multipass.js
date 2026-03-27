export const common = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_emitterX;
uniform float u_emitterY;
uniform float u_emitterVelX;
uniform float u_emitterVelY;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
`

export const bufferAFragmentShader = `
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  
  vec4 prev = texture2D(iChannel0, uv);
  
  float dist = distance(uv, vec2(u_emitterX, 1.0 - u_emitterY));
  float glow = 0.008 / dist;
  glow *= 0.97;
  
  vec3 color = prev.rgb * 0.97 + vec3(1.0, 0.5, 0.3) * glow;
  
  gl_FragColor = vec4(color, 1.0);
}
`

export const bufferBFragmentShader = `
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  
  vec4 bufferA = texture2D(iChannel0, uv);
  vec4 noise = texture2D(iChannel1, uv);
  
  float dist = distance(uv, vec2(u_emitterX, 1.0 - u_emitterY));
  float ripple = sin(dist * 30.0 - u_time * 3.0) * 0.5 + 0.5;
  ripple *= 0.005 / (dist + 0.01);
  
  vec3 color = bufferA.rgb;
  color += vec3(0.3, 0.8, 1.0) * ripple;
  
  float n = (noise.r - 0.5) * 0.03;
  color += vec3(n, n * 0.5, n * 0.3);
  
  gl_FragColor = vec4(color, 1.0);
}
`

export const imageFragmentShader = `
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  
  vec4 bufferB = texture2D(iChannel0, uv);
  vec4 bufferA = texture2D(iChannel1, uv);
  
  vec3 color = mix(bufferA.rgb, bufferB.rgb, 0.7);
  
  color = pow(color, vec3(1.1));
  color = clamp(color, 0.0, 1.0);
  
  gl_FragColor = vec4(color, 1.0);
}
`

export const channels = {
  buffera: { iChannel0: 'self', iChannel1: 'noise' },
  bufferb: { iChannel0: 'buffera', iChannel1: 'noise' },
  image: { iChannel0: 'bufferb', iChannel1: 'buffera' }
}
