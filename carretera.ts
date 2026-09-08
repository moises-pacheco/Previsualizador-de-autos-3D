import * as THREE from 'three';

export class Carretera{
    private carretera_geometria: THREE.BoxGeometry;
    public carretera_material: THREE.ShaderMaterial;
    private carretera: THREE.Mesh;
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene){
        this.carretera_geometria = new THREE.BoxGeometry(50,1,450);
        this.carretera_material = new THREE.ShaderMaterial({
            glslVersion: THREE.GLSL3,
            uniforms:{
                time: {value: 0},
                resolution: {value: new THREE.Vector2(window.innerWidth,window.innerHeight)}
            },
            vertexShader: `
            out vec2 vUv;
            void main(){
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
            `,
            fragmentShader: `
            
                uniform float time;
                uniform vec2 resolution;

                in vec2 vUv;
                out vec4 fragColor;

                void main(void){
                    vec2 uv_centrado = vec2(vUv - 0.5);

                        float colorSolido = 0.06;
                        vec3 color = vec3(colorSolido, colorSolido, colorSolido);

                        float repeticiones = 10.0; 
                        float velocidad = 1.4;    

                        float patron = fract(vUv.y * repeticiones - time * velocidad);
                    

                        float largoLinea = 0.4; 

                        if (abs(uv_centrado.x) < 0.010 && patron < largoLinea) {
                            color = vec3(1.0, 0.85, 0.0);
                            fragColor = vec4(color, 1);
                        } else {
                            fragColor = vec4(color, 1);
                        }
                }
            
            `

            

        });
        this.carretera = new THREE.Mesh(this.carretera_geometria, this.carretera_material);
        this.scene = scene;
    }

    crear(){
        this.carretera.rotation.y = 1.57;
        this.carretera.position.y = -2.9;
        this.scene.add(this.carretera);
    }


}