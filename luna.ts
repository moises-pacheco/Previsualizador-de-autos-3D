import * as THREE from 'three';

export class Luna{
    private textura_loader: THREE.TextureLoader;
    private textura: THREE.Texture;
    private luna_geometria: THREE.SphereGeometry;
    private luna_material: THREE.MeshStandardMaterial;
    private luna: THREE.Mesh;
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene){
        this.textura_loader = new THREE.TextureLoader();
        this.textura = this.textura_loader.load('/texturas/luna.jpg');
        this.luna_geometria = new THREE.SphereGeometry(15,32,16);
        this.luna_material = new THREE.MeshStandardMaterial({map: this.textura, roughness: 10, emissive:10});
        this.luna = new THREE.Mesh(this.luna_geometria,this.luna_material);
        this.scene = scene;
    }

    crear(){
        const luna_medida = 2;
        this.luna.position.x = -1000;
        this.luna.position.y = 250;
        this.luna.position.z = -150;
        this.luna.scale.set(luna_medida, luna_medida, luna_medida)
        this.scene.add(this.luna);
    }
}