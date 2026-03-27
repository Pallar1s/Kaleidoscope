export const relaxPlasmaFragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  void main() {
    float k = 0.0;
    vec2 uv = gl_FragCoord.xy / u_resolution - 0.5;
    vec3 d = vec3(uv, 1.0);
    vec3 o = d;
    vec3 c = k * d;
    vec3 p;
    
    for (int i = 0; i < 99; i++) {
      p = o + sin(u_time * 0.1);
      for (int j = 0; j < 10; j++) {
        p = abs(p.zyx - 0.4) - 0.7;
        k += exp(-6.0 * abs(dot(p, o)));
      }
      
      k /= 3.0;
      o += d * 0.05 * k;
      c = 0.97 * c + 0.1 * k * vec3(k * k, k, 1.0);
    }
    
    c = 0.4 * log(1.0 + c);
    
    gl_FragColor = vec4(c, 1.0);
  }
`
