import * as THREE from 'three';
import { Auto } from './auto.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js'
import { Montana } from './montana.js';
import { Poste } from './poste_de_luz.js';
import { Luna } from './luna.js';
import { Carretera } from './carretera.js';
import { I_Auto } from './iluminacion/iluminacion_auto.js';
import './menu.js';




const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 4000);
camera.position.set(17.47,-1.09,10.06);
camera.rotation.y = .9;

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

const controls = new OrbitControls(camera, renderer.domElement);

//HDR
const hdr_loader = new HDRLoader();
const envMap = await hdr_loader.loadAsync('HDR/night.hdr');
envMap.mapping = THREE.EquirectangularReflectionMapping;
scene.environment = envMap;

//Fondo escena:
const estrellas_loader = new THREE.TextureLoader();
const estrellas = estrellas_loader.load('/texturas/estrellas.jpg');
estrellas.mapping = THREE.EquirectangularRefractionMapping;
estrellas.colorSpace = THREE.SRGBColorSpace;
scene.background = estrellas;
scene.backgroundIntensity = .2;


//Modelos
//AUTOS
export const malibu = new Auto(scene,'/modelos/malibu.glb', '/modelos/rueda_izquierda.glb','/modelos/rueda_derecha.glb', -7.72);
malibu.posicionar();

Auto.eliminarAuto(malibu.getAuto());

export const jeep = new Auto(scene, '/modelos/Jeep/jeep.glb', '/modelos/Jeep/jeep_rueda_izquierda.glb', '/modelos/Jeep/jeep_rueda_derecha.glb', -7.2);
jeep.posicionar();
Auto.eliminarAuto(jeep.getAuto());

export const fiat = new Auto(scene,'/modelos/fiat/fiat.glb', '/modelos/fiat/rueda_izquierda.glb', '/modelos/fiat/rueda_derecha.glb', -6);
fiat.posicionar();

const montana = new Montana(scene);
montana.crear();



const poste_de_luz = new Poste(scene);
poste_de_luz.crear();


const luna = new Luna(scene);
luna.crear();

const carretera = new Carretera(scene);
carretera.crear();


//Luz

const I_Auto_1 = new I_Auto(scene);
I_Auto_1.crear();

//Tiempo
const clock = new THREE.Clock();

function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  camera.aspect = w / h;
  camera.updateProjectionMatrix(); 

  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
}

window.addEventListener('resize', onResize);

function animate(){
    carretera.carretera_material.uniforms.time!.value = clock.getElapsedTime();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    malibu.crear_animacion();
    jeep.crear_animacion();
    fiat.crear_animacion();
    
    console.log(`X: ${camera.position.x}, Y: ${camera.position.y}, Z: ${camera.position.z}`)

    poste_de_luz.crear_animacion();
    montana.crear_animacion();
}

animate();

