import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'

export class Poste{
    private loader: GLTFLoader;
    private poste: THREE.Group;
    private scene: THREE.Scene;
    
    constructor(scene: THREE.Scene){
        this.loader = new GLTFLoader();
        this.poste = new THREE.Group();
        this.scene = scene;

        this.scene.add(this.poste);
    }

    crear(){
        this.loader.load('/modelos/poste_de_luz.glb', (gltf) => {
            this.poste.add(gltf.scene);
            this.poste.rotation.y = 1.57;
            this.poste.position.y = -3.7;
            this.poste.position.x = 20;
        }, undefined, (error) => {
            console.log(`Hubo un error al cargar el modelo: ${error}`)
        })
    }


    crear_animacion(){
        const velocidad_poste = -.16;
        if(this.poste.position.x < -18.4){
            this.poste.position.x = 20;
        }
        this.poste.position.x += velocidad_poste;
        // console.log(this.poste.position.x)
    }

    getPoste(){
        return this.poste;
    }
}