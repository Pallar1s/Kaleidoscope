export const edgesFragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  #define S(a, b, t) smoothstep(a, b, t)
  #define NUM_LAYERS 4.0
  
  float N21(vec2 p) {
    vec3 a = fract(vec3(p.xyx) * vec3(213.897, 653.453, 253.098));
    a += dot(a, a.yzx + 79.76);
    return fract((a.x + a.y) * a.z);
  }
  
  vec2 GetPos(vec2 id, vec2 offs, float t) {
    float n = N21(id + offs);
    float n1 = fract(n * 10.0);
    float n2 = fract(n * 100.0);
    float a = t + n;
    return offs + vec2(sin(a * n1), cos(a * n2)) * 0.4;
  }
  
  float df_line(vec2 a, vec2 b, vec2 p) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
  }
  
  float line(vec2 a, vec2 b, vec2 uv) {
    float r1 = 0.04;
    float r2 = 0.01;
    float d = df_line(a, b, uv);
    float d2 = length(a - b);
    float fade = S(1.5, 0.5, d2);
    fade += S(0.05, 0.02, abs(d2 - 0.75));
    return S(r1, r2, d) * fade;
  }
  
  float NetLayer(vec2 st, float n, float t) {
    vec2 id = floor(st) + n;
    st = fract(st) - 0.5;
   
    vec2 p0 = GetPos(id, vec2(-1.0, -1.0), t);
    vec2 p1 = GetPos(id, vec2(0.0, -1.0), t);
    vec2 p2 = GetPos(id, vec2(1.0, -1.0), t);
    vec2 p3 = GetPos(id, vec2(-1.0, 0.0), t);
    vec2 p4 = GetPos(id, vec2(0.0, 0.0), t);
    vec2 p5 = GetPos(id, vec2(1.0, 0.0), t);
    vec2 p6 = GetPos(id, vec2(-1.0, 1.0), t);
    vec2 p7 = GetPos(id, vec2(0.0, 1.0), t);
    vec2 p8 = GetPos(id, vec2(1.0, 1.0), t);
    
    float m = 0.0;
    float sparkle = 0.0;
    
    vec2 center = p4;
    
    for (int i = 0; i < 9; i++) {
      vec2 pt = p0;
      if (i == 1) pt = p1;
      else if (i == 2) pt = p2;
      else if (i == 3) pt = p3;
      else if (i == 4) pt = p4;
      else if (i == 5) pt = p5;
      else if (i == 6) pt = p6;
      else if (i == 7) pt = p7;
      else if (i == 8) pt = p8;
      
      m += line(center, pt, st);
      float d = length(st - pt);
      float s = 0.005 / (d * d);
      s *= S(1.0, 0.7, d);
      float pulse = sin((fract(pt.x) + fract(pt.y) + t) * 5.0) * 0.4 + 0.6;
      pulse = pow(pulse, 20.0);
      s *= pulse;
      sparkle += s;
    }
    
    m += line(p1, p3, st);
    m += line(p1, p5, st);
    m += line(p7, p5, st);
    m += line(p7, p3, st);
    
    float sPhase = (sin(t + n) + sin(t * 0.1)) * 0.25 + 0.5;
    sPhase += pow(sin(t * 0.1) * 0.5 + 0.5, 50.0) * 5.0;
    m += sparkle * sPhase;
    
    return m;
  }
  
  void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.y;
    
    float t = u_time * 0.1;
    
    float s = sin(t);
    float c = cos(t);
    mat2 rot = mat2(c, -s, s, c);
    vec2 st = uv * rot;
    
    float m = 0.0;
    for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYERS) {
      float z = fract(t + i);
      float size = mix(15.0, 1.0, z);
      float fade = S(0.0, 0.6, z) * S(1.0, 0.8, z);
      m += fade * NetLayer(st * size, i, t);
    }
    
    float glow = 0.2 * sin(t * 2.0) + 0.3;
    
    vec3 baseCol = vec3(s, cos(t * 0.4), -sin(t * 0.24)) * 0.4 + 0.6;
    vec3 col = baseCol * m;
    col += baseCol * glow;
    
    col *= 1.0 - dot(uv, uv);
    
    gl_FragColor = vec4(col, 1.0);
  }
`
