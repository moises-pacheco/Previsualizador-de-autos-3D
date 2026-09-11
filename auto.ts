import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { sin } from 'three/tsl';

export class Auto {

    public auto: THREE.Group;
    private loader: GLTFLoader;
    private scene: THREE.Scene;

    private r_i_d: THREE.Group;
    private r_d_d: THREE.Group;
    private r_i_a: THREE.Group;
    private r_d_a: THREE.Group;

    private auto_ruta: string;
    private rueda_trasera_posicion: number;


    private angulo: number;

    constructor(scene: THREE.Scene, auto_ruta: string, rueda_izquierda_ruta:string, rueda_derecha_ruta:string, rueda_trasera_posicion: number) {
        this.angulo = 0;
        this.scene = scene;
        this.loader = new GLTFLoader();
        this.auto = new THREE.Group();
        this.scene.add(this.auto);
        this.rueda_trasera_posicion = rueda_trasera_posicion;
        
        this.auto_ruta = auto_ruta;


        this.r_i_d = this.crear_rueda(rueda_izquierda_ruta, false);
        this.r_d_d = this.crear_rueda(rueda_derecha_ruta,false);
        this.r_i_a = this.crear_rueda(rueda_izquierda_ruta,true);
        this.r_d_a = this.crear_rueda(rueda_derecha_ruta,true);
        
    }


    crear_animacion(){
        const rueda_rapidez = .94;
        this.r_i_d.rotation.z += rueda_rapidez;
        this.r_d_d.rotation.z += rueda_rapidez;
        this.r_i_a.rotation.z += rueda_rapidez;
        this.r_d_a.rotation.z += rueda_rapidez;

        this.auto.position.y = -4 + (Math.sin(this.angulo) * .06);
        this.angulo+= 0.082;
    }

    posicionar() {
        this.crear_auto();
        this.auto.position.z = 5.8;
    }


    crear_auto() {
        this.loader.load(this.auto_ruta, (gltf) => {
            this.auto.add(gltf.scene);
        }, undefined, (error) => {
            console.log(`No se ha podido cargar el modelo correctamente: ${error}`)
        })
    }

    crear_rueda(ruta: string, rueda_atras: boolean): THREE.Group {
        const pivote = new THREE.Group();
        this.loader.load(ruta, (gltf) => {
            if(rueda_atras){
                gltf.scene.position.x = this.rueda_trasera_posicion;
            }
            const dimensiones_rueda = new THREE.Box3().setFromObject(gltf.scene);
            const centro_rueda = new THREE.Vector3();
            dimensiones_rueda.getCenter(centro_rueda);
            gltf.scene.position.sub(centro_rueda);
            pivote.position.copy(centro_rueda);
            pivote.add(gltf.scene);
            this.auto.add(pivote);
        })
        return pivote; 
    }

    static eliminarAuto(auto: THREE.Group){
        auto.traverse((obj) => {
            if(obj instanceof THREE.Mesh){
                obj.geometry.dispose();

                if(Array.isArray(obj.material)){
                    obj.material.forEach((m) => m.dispose());
                }else{
                    obj.material.dispose();
                }
            }
        })

        auto.removeFromParent();
    }

    getAuto(){
        return this.auto;
    }

    agregarAuto(){
        this.scene.add(this.auto);
    }




}