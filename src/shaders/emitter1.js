export const emitter1FragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_emitterX;
  uniform float u_emitterY;
  uniform float u_emitterVelX;
  uniform float u_emitterVelY;
  
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }
  
  float fbm(vec2 p) {
    float f = 0.0;
    f += 0.5000 * noise(p); p *= 2.02;
    f += 0.2500 * noise(p); p *= 2.03;
    f += 0.1250 * noise(p); p *= 2.01;
    f += 0.0625 * noise(p);
    return f;
  }
  
  vec2 curl(vec2 p) {
    vec2 e = vec2(0.01, 0.0);
    float n1 = fbm(p + e.xy);
    float n2 = fbm(p - e.xy);
    float n3 = fbm(p + e.yx);
    float n4 = fbm(p - e.yx);
    return vec2(n3 - n4, n2 - n1) / (2.0 * e.x);
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 emitter = vec2(u_emitterX / u_resolution.x, 1.0 - u_emitterY / u_resolution.y);
    
    vec2 velocity = vec2(u_emitterVelX, -u_emitterVelY);
    float speed = length(velocity);
    vec2 velDir = speed > 0.1 ? normalize(velocity) : vec2(0.0, 1.0);
    
    vec2 toPixel = uv - emitter;
    float dist = length(toPixel);
    
    vec2 perpDir = vec2(-velDir.y, velDir.x);
    float behind = dot(toPixel, -velDir);
    float side = dot(toPixel, perpDir);
    
    float t = u_time * 0.4;
    
    vec2 noiseCoord = uv * 5.0;
    vec2 c1 = curl(noiseCoord + t * 0.3);
    vec2 c2 = curl(noiseCoord * 2.0 - t * 0.2 + 10.0);
    vec2 c3 = curl(noiseCoord * 0.5 + t * 0.15 + 20.0);
    
    float wake = exp(-abs(side) * 6.0) * exp(-behind * 2.0) * smoothstep(0.0, 0.1, behind);
    
    vec2 swirl = c1 * 0.6 + c2 * 0.3 + c3 * 0.2;
    float swirlIntensity = length(swirl);
    
    float spiral = 0.0;
    float numArms = 3.0;
    float angle = atan(side, behind);
    float radius = sqrt(behind * behind + side * side);
    
    for (float i = 0.0; i < 3.0; i++) {
      float armAngle = angle + i * 6.28318 / numArms;
      float spiralPattern = sin(armAngle * 4.0 - radius * 15.0 + t * 3.0);
      spiral += spiralPattern * exp(-radius * 4.0) * 0.5;
    }
    
    float vortexCore = exp(-dist * 30.0) * 0.5;
    
    float turbulence = fbm(uv * 8.0 + c1 * 2.0 + velocity * 0.1);
    
    float intensity = 0.0;
    intensity += spiral * wake * 1.5;
    intensity += swirlIntensity * wake * 0.8;
    intensity += vortexCore;
    intensity += turbulence * wake * 0.3;
    
    intensity *= (speed * 0.5 + 0.3);
    intensity = abs(intensity);
    intensity = clamp(intensity, 0.0, 1.0);
    
    float hue = fract(0.55 + turbulence * 0.15 + spiral * 0.1);
    float sat = 0.9;
    float val = intensity * 1.8;
    val = clamp(val, 0.0, 1.0);
    
    vec3 color = hsv2rgb(vec3(hue, sat, val));
    
    float alpha = intensity * 1.2;
    alpha = clamp(alpha, 0.0, 1.0);
    
    gl_FragColor = vec4(color, alpha);
  }
`
