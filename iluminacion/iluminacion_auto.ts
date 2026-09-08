import * as THREE from 'three';

export class I_Auto{
    private punto_luz: THREE.PointLight;
    private punto_luz_helper: THREE.PointLightHelper;
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene){
        this.punto_luz = new THREE.PointLight('white', 5);
        this.punto_luz_helper = new THREE.PointLightHelper(this.punto_luz, 1);
        this.scene = scene;
    }

    crear(){
        // this.punto_luz.position.set(7,-1,4.4);
        // this.scene.add(this.punto_luz,this.punto_luz_helper);
    }
}