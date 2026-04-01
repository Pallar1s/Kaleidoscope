export const warpFragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  void main() {
    vec3 c;
    float l;
    float t = u_time;
    vec2 r = u_resolution.xy;
    vec2 fragCoord = gl_FragCoord.xy;
    
    for(int i = 0; i < 3; i++) {
      vec2 uv;
      vec2 p = fragCoord.xy / r;
      uv = p;
      p -= 0.5;
      p.x *= r.x / r.y;
      t += 0.07;
      l = length(p);
      uv += p / l * (sin(t) + 1.0) * abs(sin(l * 9.0 - t - t));
      c[i] = 0.01 / length(mod(uv, 1.0) - 0.5);
    }
    
    vec4 outColor = vec4(c / l, u_time);
    gl_FragColor = outColor;
  }
`;
