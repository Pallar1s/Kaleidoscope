export const waterFragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time * 0.5;
    
    float wave1 = sin(uv.x * 10.0 + t * 0.3) * 0.1;
    float wave2 = sin(uv.x * 20.0 - t * 0.6) * 0.05;
    float wave = wave1 + wave2 + uv.y;
    
    float caustics = sin(wave * 30.0 + t * 1.5) * 0.5 + 0.5;
    caustics *= sin(wave * 20.0 - t * 0.9 + uv.x * 10.0) * 0.5 + 0.5;
    caustics = pow(caustics, 2.0);
    
    vec3 waterColor = mix(vec3(0.0, 0.1, 0.3), vec3(0.0, 0.3, 0.6), caustics);
    waterColor += vec3(0.1, 0.2, 0.3) * (1.0 - uv.y);
    
    gl_FragColor = vec4(waterColor, 1.0);
  }
`
