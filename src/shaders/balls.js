//https://www.shadertoy.com/view/fcfXDr
export const bufferAFragmentShader = `
  const int ballscount = 200;
  
  float getRadius(int i) {
      return i==0 ? 0.1 : (0.14-fract(float(i-1)/10.0)/10.0)/1.5;
  }
  
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform int u_frame;
  uniform vec2 u_emitter;
  uniform sampler2D iChannel0;
  
  // Pseudo-random
  vec2 rand2(int seed) {
      vec2 result;
      result.x = fract(sin(float(seed) * 12.9898) * 43758.5453);
      result.y = fract(sin(float(seed) * 78.233 + result.x) * 43758.5453);
      return result;
  }
  
  void main() {
    float ballId = gl_FragCoord.x;
    
    if (u_frame <= 1) {
      vec2 m = vec2(u_resolution.x, u_resolution.y)/min(u_resolution.x, u_resolution.y);
      gl_FragColor = vec4((rand2(int(ballId))-0.5)*vec2(m)*1.0, 0.0, 0.0);
      
    } else {
      vec4 ball = texelFetch(iChannel0, ivec2(int(ballId), 0), 0);
      vec4 ball0 = ball;
      
      if (int(ballId) == 0) {
		vec2 u_emitter2 = vec2(u_emitter.x, u_resolution.y - u_emitter.y);
        vec2 mv = (u_emitter2 * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        gl_FragColor = vec4(mv.xy, mv.xy-ball0.xy);
        return;
      }
      
      ball.zw *= 1.0;
      ball.xy += ball.zw;
      
      for (int i = 0; i <= ballscount; i++) {
        if (i != int(ballId)) {
          vec4 ball1 = texelFetch(iChannel0, ivec2(i, 0), 0);
          
          vec2 delta = ball1.xy - ball0.xy;
          float dist = length(delta);
          float minDist = getRadius(int(ballId)) + getRadius(i);
          
          if (dist < minDist && dist > 0.0) {
            vec2 n = delta / dist;
            float overlap = minDist - dist;
            float k = (i==0 ? 1.0 : 0.5);
            vec2 separation = n * overlap * k;
            ball.xy -= separation;
            ball.zw -= separation * 0.5;
          }
        }
      }
      
      vec2 border = u_resolution.xy/min(u_resolution.x, u_resolution.y) - getRadius(int(ballId));
      if (ball.x < -border.x) {
        ball.x = -border.x;
        ball.z = -ball.z * 0.5;
      } else if (ball.x > border.x) {
        ball.x = border.x;
        ball.z = -ball.z * 0.5;
      }
      if (ball.y < -border.y) {
        ball.y = -border.y;
        ball.w = -ball.w * 0.5;
      } else if (ball.y > border.y) {
        ball.y = border.y;
        ball.w = -ball.w * 0.5;
      }
      
      gl_FragColor = ball;
    }
  }
`;

export const bufferBFragmentShader = `
  const int ballscount = 200;
  
  float getRadius(int i) {
      return i==0 ? 0.1 : (0.14-fract(float(i-1)/10.0)/10.0)/1.5;
  }
  
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform int u_frame;
  uniform vec4 u_mouse;
  uniform sampler2D iChannel0;
  uniform sampler2D iChannel1;
  
  void main() {
    float ballId = gl_FragCoord.x;
    
    if (u_frame <= 1 || int(ballId) == 0) {
      gl_FragColor = vec4(0.0);
      
    } else {
      vec4 ball0 = texelFetch(iChannel0, ivec2(int(ballId), 0), 0);
      vec4 ballR = texelFetch(iChannel1, ivec2(int(ballId), 0), 0);
      
      ballR.y *= 0.95;
      ballR.x += ballR.y;
      
      for (int i = 0; i <= ballscount; i++) {
        if (i != int(ballId)) {
          vec4 ball1 = texelFetch(iChannel0, ivec2(i, 0), 0);
          
          vec4 delta = ball1 - ball0;
          float dist = length(delta.xy);
          float minDist = getRadius(int(ballId)) + getRadius(i);
          
          if (dist < minDist && dist > 0.0) {
            float a1 = atan(delta.y, delta.x);
            float a2 = atan(delta.w, delta.z);
            ballR.y += sin(a1 - a2) * length(delta.wz);
          }
        }
      }
      
      vec2 border = u_resolution.xy/min(u_resolution.x, u_resolution.y) - getRadius(int(ballId));
      if (abs(ball0.x) > border.x || abs(ball0.x) > border.x) ballR.y /= 2.0;
      
      gl_FragColor = ballR;
    }
  }
`;

export const bufferCFragmentShader = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform int u_frame;
  uniform sampler2D iChannel2;
  
  float sdPentagram(in vec2 p, in float r ) {
      const float k1x = 0.809016994;
      const float k2x = 0.309016994;
      const float k1y = 0.587785252;
      const float k2y = 0.951056516;
      const float k1z = 0.726542528;
      const vec2  v1  = vec2( k1x,-k1y);
      const vec2  v2  = vec2(-k1x,-k1y);
      const vec2  v3  = vec2( k2x,-k1y);
      
      p.x = abs(p.x);
      p -= 2.0*max(dot(v1,p),0.0)*v1;
      p -= 2.0*max(dot(v2,p),0.0)*v2;
      p.x = abs(p.x);
      p.y -= r;
      return length(p-v3*clamp(dot(p,v3),0.0,k1z*r))
             * sign(p.y*v3.x-p.x*v3.y);
  }
  
  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec4 prev = texture(iChannel2, fragCoord/u_resolution.xy);
    
    if (u_frame <= 1 || int(prev.w) != int(min(u_resolution.x, u_resolution.y))) {
      vec2 uv = (fragCoord - u_resolution.xy/2.0)/u_resolution.xy * 2.05;
      float alias = min(u_resolution.x, u_resolution.y)/16.0;
      vec4 col = vec4(1.0);
      col *= clamp(-(length(uv)-1.01)*alias, 0.0, 1.0);
      col *= clamp(clamp(-(length(uv)-0.8)*alias, 0.0, 0.65) + vec4(0.25, 1.0, 0.75, 1.0), 0.0, 1.0);
      col *= vec4(clamp(sdPentagram(uv, 0.6)*alias, 0.0, 1.0));
      col.w = min(u_resolution.x, u_resolution.y);
      gl_FragColor = col;
    } else {
      gl_FragColor = prev;
    }
  }
`;

export const imageFragmentShader = `
  const int ballscount = 200;
  
  float getRadius(int i) {
      return i==0 ? 0.1 : (0.14-fract(float(i-1)/10.0)/10.0)/1.5;
  }
  
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform int u_frame;
  uniform sampler2D iChannel0;
  uniform sampler2D iChannel1;
  uniform sampler2D iChannel2;
  
  #define rot(a) mat2(cos(a), -sin(a), sin(a), cos(a))
  
  vec3 rotateColor(vec3 color, float angle) {
      float cosA = cos(angle);
      float sinA = sin(angle);
      float a = 0.333 + 0.667 * cosA;
      float b = 0.333 - 0.333 * cosA;
      float c = 0.577 * sinA;
      return mat3(a,b+c,b-c,b-c,a,b+c,b+c,b-c,a) * color;
  }
  
  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    
    float alias = min(u_resolution.x, u_resolution.y)/2.0;
    vec2 uv = (fragCoord * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    vec4 result = vec4(1.0);
    
    for (int i = 0; i <= ballscount; i++) {
      vec2 coord = texelFetch(iChannel0, ivec2(i, 0), 0).xy;
      vec2 angle = texelFetch(iChannel1, ivec2(i, 0), 0).xy;
      
      vec2 uvc = (uv - coord) * rot(angle.x);
      vec3 puck = texture(iChannel2, uvc/getRadius(i)/2.0 + 0.5).xyz;
      puck = (i == 0) ? (1.0 - puck) : rotateColor(puck, float(i));
      
      float sd = length(uv - coord) - getRadius(i);
      result.xyz = mix(result.xyz, puck, clamp(result.xyz - sd * alias, 0.0, 1.0));
    }
    
    gl_FragColor = result;
  }
`;

export const channels = {
  buffera: { iChannel0: 'self' },
  bufferb: { iChannel0: 'buffera', iChannel1: 'self' },
  bufferc: { iChannel2: 'self' },
  image: { iChannel0: 'buffera', iChannel1: 'bufferb', iChannel2: 'bufferc' }
};