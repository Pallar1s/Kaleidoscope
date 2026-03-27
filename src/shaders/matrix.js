export const matrixFragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  float random(float seed) {
    return fract(sin(seed * 1234.5) * 43758.5453);
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time * 0.5;
    
    float cols = 20.0;
    float col = floor(uv.x * cols) / cols;
    float speed = random(col) * 0.5 + 0.1;
    float offset = random(col + 1.0) * 0.5;
    
    float y = fract(uv.y + t * speed + offset);
    float brightness = pow(y, 10.0);
    
    float glow = sin(uv.y * 50.0 - t * speed * 10.0) * 0.1 + 0.9;
    
    vec3 color = vec3(0.0, brightness * glow * 0.7, 0.0);
    
    gl_FragColor = vec4(color, 1.0);
  }
`
