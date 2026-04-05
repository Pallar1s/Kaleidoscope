export const rocailleFragmentShader = `

precision highp float;

uniform float u_time;
uniform vec2 u_resolution;

void main()
{
    vec2 I = gl_FragCoord.xy;
    //Vector for scaling and turbulence
    vec2 v = u_resolution.xy;
    //Centered and scaled coordinates
    vec2 p = (I+I-v)/v.y/.3;
    
    vec4 O = vec4(0.0);
    //Iterators for layers and turbulence frequency
    float i, f;
    for(O*=i;i++<9.;
        //Add coloring, attenuating with turbulent coordinates
        O += (cos(i+vec4(0,1,2,3))+1.)/6./length(v))
        //Turbulence loop
        //https://mini.gmshaders.com/p/turbulence
        for(v=p,f=0.;f++<9.;v+=sin(v.yx*f+i+u_time)/f);
    
    //Tanh tonemapping
    //https://www.shadertoy.com/view/ms3BD7
    O = tanh(O*O);
    gl_FragColor = O;
}
`
