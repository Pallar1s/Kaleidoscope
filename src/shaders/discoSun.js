export const discoSunFragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  mat2 rotz(float a) {
    return mat2(cos(a), -sin(a), sin(a), cos(a));
  }

  vec3 palette(float i){
    const vec3 a = vec3(0.50, 0.38, 0.26);
    const vec3 b = vec3(0.50, 0.35, 0.25);
    const vec3 c = vec3(1.00);
    const vec3 d = vec3(0.00, 0.12, 0.25);
    return a + b * cos(6.2831853 * (c * i + d));
  }

  vec3 palette2(float i){
    const vec3 a = vec3(0.742702, 0.908877, 0.959831);
    const vec3 b = vec3(-0.711000, 0.275000, -0.052000);
    const vec3 c = vec3(1.000000, 1.855000, 1.000000);
    const vec3 d = vec3(0.180000, 0.091000, 0.380000);
    return a + b * cos(6.2831853 * (c * i + d));
  }

  void main() {
    vec2 u = gl_FragCoord.xy;
    vec2 uv = (u - 0.5 * u_resolution.xy + 0.5) / u_resolution.y;
    
    float t = mod(u_time, 6.283185);
    
    vec3 p;
    vec3 d = normalize(vec3(2.0 * u - u_resolution.xy, u_resolution.y));
    
    p.z = t;
    
    vec4 col = vec4(0.0);
    float i;
    
    for (i = 0.0; i < 20.0; i++) {
      p.xy *= rotz(-p.z * 0.01 - t * 0.05);
      
      float s = 0.6;
      s = max(s, 4.0 * (-length(p.xy) + 10.0));
      
      s += abs(
        p.y * 0.004 +
        sin(t - p.x * 0.5) * 0.9 +
        1.0
      );
      
      p += d * s;
      
      col += 1.0 / (s * 0.2);
    }
    
    col *= vec4(palette(length(p) / (abs(sin(u_time * 0.02) * 50.0) + 6.0)), 1.0);
    
    float shimmer = 20.0 * smoothstep(
      0.001,
      abs(sin(u_time * 5.0)),
      0.7 - length(sin(uv * 200.0) / 1.5) - abs(uv.y) + 0.2
    );
    col -= shimmer;
    
    col /= 0.5e2;
    
    float l = length(uv);
    col *= 1.2 - l;
    
    col = mix(col, vec4(palette(l - 0.23).rgb, 1.0), 1.0 - smoothstep(0.01, 0.95, l));
    col = tanh(col + col);
    
    //col = col / (col + vec4(1.0));
    
    gl_FragColor = clamp(col, 0.0, 1.0);
  }
`
