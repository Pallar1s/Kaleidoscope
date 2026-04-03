export const channelSources = {
  iChannel0: 'trail'
}

export const trailEffectFragmentShader = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D iChannel0;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec4 trail = texture(iChannel0, uv);
  
  // Boost brightness
  vec3 color = trail.rgb * 1.5;
  
  // Add subtle color shift based on time
  float shift = sin(u_time * 0.5) * 0.1;
  color.r += shift;
  color.b -= shift;
  
  // Add slight glow effect
  color += trail.rgb * 0.2;
  
  gl_FragColor = vec4(color, 1.0);
}
`;