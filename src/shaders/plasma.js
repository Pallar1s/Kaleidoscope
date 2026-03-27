export const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

export const plasmaFragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  
  void main() {
    vec2 p = gl_FragCoord.xy / u_resolution;
    float t = u_time * 0.5;
    
    float plasma = 0.0;
    
    plasma += sin(p.x * 3.0 + t * 1.2);
    plasma += sin(p.y * 2.5 + t * 0.9);
    plasma += sin((p.x + p.y) * 2.8 + t * 1.1);
    plasma += sin(length(p) * 4.0 - t * 1.5);
    plasma += sin(p.x * 4.0 + sin(p.y * 3.0 + t)) * 0.5;
    plasma += sin(p.y * 4.0 + sin(p.x * 3.0 - t)) * 0.5;
    
    float angle = atan(p.y, p.x);
    plasma += sin(angle * 6.0 + t * 2.0) * 0.3;
    plasma += sin(length(p) * 5.0 - t * 1.8 + angle) * 0.2;
    
    float radial = sin(length(p) * 8.0 - t * 2.5);
    radial += sin(p.x * 6.0 + p.y * 6.0 + t) * 0.3;
    plasma = mix(plasma, radial, 0.3);
    
    float n1 = noise(p * 3.0 + t * 0.5);
    float n2 = noise(p * 5.0 - t * 0.3);
    plasma += (n1 - 0.5) * 0.4;
    plasma += (n2 - 0.5) * 0.2;
    
    float spiral = sin(length(p) * 12.0 + angle * 8.0 + t * 3.0);
    plasma += spiral * exp(-length(p) * 1.5) * 0.4;
    
    plasma = plasma / 4.5;
    
    float hue = fract(plasma * 0.15 + t * 0.05 + length(p) * 0.05 + 0.6);
    float sat = 0.9;
    float val = 0.5 + plasma * 0.2;
    
    vec3 color = hsv2rgb(vec3(hue, sat, val));
    
    gl_FragColor = vec4(color, 1.0);
  }
`
