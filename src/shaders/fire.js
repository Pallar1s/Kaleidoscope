export const fireFragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time * 0.5;
    vec2 uv2 = uv;
    
    for (float i = 1.0; i < 8.0; i++) {
      uv2.x += sin(uv.y * i * 4.0 + t) * 0.1;
      uv2.y += sin(uv.x * i * 4.0 + t) * 0.1;
    }
    
    float fire = sin(uv2.x * 10.0 + t * 2.0) * 0.5 + 0.5;
    fire *= sin(uv2.y * 15.0 - t * 3.0) * 0.5 + 0.5;
    fire = pow(fire, 2.0);
    
    vec3 col = mix(vec3(1.0, 0.2, 0.0), vec3(1.0, 0.8, 0.0), fire);
    col = mix(vec3(0.1, 0.0, 0.0), col, fire * 1.5);
    
    gl_FragColor = vec4(col, 1.0);
  }
`
