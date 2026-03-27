export const emitter1FragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_emitterX;
  uniform float u_emitterY;
  uniform float u_emitterVelX;
  uniform float u_emitterVelY;
  
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  
  float noiseFBM(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.1;
      amplitude *= 0.5;
    }
    return value;
  }
  
  vec2 curlNoise(vec2 p) {
    float eps = 0.01;
    
    float n1 = noiseFBM(p + vec2(eps, 0.0));
    float n2 = noiseFBM(p - vec2(eps, 0.0));
    float n3 = noiseFBM(p + vec2(0.0, eps));
    float n4 = noiseFBM(p - vec2(0.0, eps));
    
    float dx = (n1 - n2) / (2.0 * eps);
    float dy = (n3 - n4) / (2.0 * eps);
    
    return vec2(dy, -dx);
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 emitter = vec2(u_emitterX / u_resolution.x, 1.0 - u_emitterY / u_resolution.y);
    vec2 velocity = vec2(u_emitterVelX / u_resolution.x, -u_emitterVelY / u_resolution.y);
    
    float dist = distance(uv, emitter);
    
    float velMag = length(velocity);
    vec2 velDir = velMag > 0.001 ? normalize(velocity) : vec2(0.0);
    
    float behind = dot(uv - emitter, -velDir);
    float side = dot(uv - emitter, vec2(-velDir.y, velDir.x));
    
    vec2 turbP = uv * 8.0;
    float t = u_time * 0.5;
    
    vec2 curl1 = curlNoise(turbP + velDir * behind * 3.0 + t * 0.3);
    vec2 curl2 = curlNoise(turbP * 2.0 - velDir * behind * 2.0 - t * 0.2);
    
    float wake = exp(-abs(behind) * 8.0) * exp(-abs(side) * 3.0);
    wake *= smoothstep(0.0, 0.3, behind);
    
    float swirl = sin(side * 20.0 - behind * 10.0 + t * 3.0);
    swirl *= exp(-abs(side) * 4.0);
    swirl *= exp(-behind * 2.0);
    
    float vortices = noiseFBM(turbP + curl1 * 2.0 + velocity * behind * 5.0 + t * 0.4);
    vortices *= wake * 0.5;
    
    float turbulence = curlNoise(turbP * 1.5 + t * 0.1).x * 0.3;
    turbulence += curlNoise(turbP * 3.0 - t * 0.15).y * 0.2;
    
    float intensity = vortices + swirl * wake * 0.5 + turbulence;
    intensity += wake * 0.2;
    intensity *= velMag * 15.0;
    intensity = abs(intensity);
    
    intensity = clamp(intensity, 0.0, 1.0);
    
    float hue = 0.6 + intensity * 0.15 + sin(t * 0.5) * 0.05;
    float sat = 0.8;
    float val = intensity * 1.5;
    
    vec3 color = vec3(
      0.3 + intensity * 0.7,
      0.5 + intensity * 0.5,
      1.0
    );
    
    float alpha = intensity * wake * 1.5;
    alpha = clamp(alpha, 0.0, 1.0);
    
    gl_FragColor = vec4(color * val, alpha);
  }
`
