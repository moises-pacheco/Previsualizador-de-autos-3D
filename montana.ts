import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class Montana {
  private loader: GLTFLoader;
  private montana: THREE.Group;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.loader = new GLTFLoader();
    this.montana = new THREE.Group();
    this.scene = scene;
  }

  crear() {
    this.loader.load(
      "/modelos/montana.glb",
      (gltf) => {
        this.montana.add(gltf.scene);
        this.montana.position.y = 100;
        this.montana.rotation.y = 7.4;
        this.scene.add(this.montana);
      },
      undefined,
      (error) => {
        console.log(`Hubo un error al cargar el modelo: ${error}`);
      },
    );
  }

  crear_animacion() {
    const velocidad_poste = -0.8;
    if (this.montana.position.x < -2000) {
      this.montana.position.x = 20;
    }
    this.montana.position.x += velocidad_poste;
    // console.log(this.montana.position.x);
  }
}
