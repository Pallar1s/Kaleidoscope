export const morphingAbstractFragmentShader = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;

#define AA 2

vec2 r(vec2 v, float t) {
    float s = sin(t), c = cos(t);
    return mat2(c, -s, s, c) * v;
}

vec3 a(vec3 c) {
    mat3 m1 = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
    mat3 m2 = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
    vec3 v = m1 * c;
    vec3 r1 = v * (v + 0.0245786) - 0.000090537;
    vec3 r2 = v * (0.983729 * v + 0.4329510) + 0.238081;
    return m2 * (r1 / r2);
}

float no(vec3 p) {
    const float PHI = 1.618033988;
    const mat3 GOLD = mat3(
        -0.571464913, +0.814921382, +0.096597072,
        -0.278044873, -0.303026659, +0.911518454,
        +0.772087367, +0.494042493, +0.399753815);
    return dot(cos(GOLD * p), sin(PHI * p * GOLD));
}

void main() {
    vec2 U = gl_FragCoord.xy;
    vec3 color = vec3(0.0);
    float t = u_time * 0.001;
    
    for (int m = 0; m < AA; m++) {
        for (int n = 0; n < AA; n++) {
            vec2 off = (vec2(float(m), float(n)) + 0.5) / float(AA) - 0.5;
            vec2 u = U + off;
            
            float s = 0.0;
            vec3 p = vec3(0.0, 0.0, -1.0 - 0.5 * sin(t * 0.1));
            vec3 l = vec3(0.0);
            vec3 d = normalize(vec3(2.0 * u - u_resolution.xy, u_resolution.y));
            
            for (int i = 0; i < 10; i++) {
                float fi = float(i);
                vec3 b = p;
                b.xy = r(sin(b.xy * 0.25), t * 0.5 + b.z * 2.0);
                s = 0.001 + abs(no(b * 20.0) / 20.0 - no(b)) * 0.7;
                s += abs(p.y * 0.2 + sin(p.z * 2.0 + (abs(p.x) * 0.5))) * 0.5;
                p += d * s;
                l += (1.0 + 1.5 * sin(fi + length(p.xy * 0.1) + 2.0 + vec3(3.0, 1.5, 0.5))) / s;
            }
            color += a(l * l / 5e2);
        }
    }
    
    gl_FragColor = vec4(color / float(AA * AA), 1.0);
}
`
