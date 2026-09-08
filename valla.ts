import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'

export class Valla{
    private loader: GLTFLoader;
    private valla: THREE.Group;
    private scene: THREE.Scene;
    
    constructor(scene: THREE.Scene){
        this.loader = new GLTFLoader();
        this.valla = new THREE.Group();
        this.scene = scene;
    }

    crear(){
        this.loader.load('/modelos/valla.glb', (gltf) => {
            this.valla.add(gltf.scene);
            this.valla.rotation.y = 1.57;
            this.valla.position.y = -3.7;
            this.valla.position.x = 20;
            this.scene.add(this.valla);
        }, undefined, (error) => {
            console.log(`Hubo un error al cargar el modelo: ${error}`)
        })
    }

        crear_animacion(){
        const velocidad_poste = -.16;
        if(this.valla.position.x < -18.4){
            this.valla.position.x = 20;
        }
        this.valla.position.x += velocidad_poste;
        console.log(this.valla.position.x)
    }
}