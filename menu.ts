import { Auto } from "./auto.js";
import { fiat, malibu, jeep } from "./app.js";
import * as THREE from 'three';


const v_malibu: HTMLLIElement = document.querySelector('#v_malibu')!;
const v_jeep: HTMLLIElement = document.querySelector('#v_jeep')!;
const v_fiat: HTMLLIElement = document.querySelector('#v_fiat')!;

function getAutos(): Auto[]{
    return [fiat,malibu,jeep];
}

v_malibu.addEventListener('click', () => {
    seleccionarAuto('Malibu');
})

v_jeep.addEventListener('click', () => {
    seleccionarAuto('Jeep');
})

v_fiat.addEventListener('click', () => {
    seleccionarAuto('Fiat');

})

function seleccionarAuto(nombre_auto:string){
    getAutos().forEach(auto => {
        if(nombre_auto !== auto.getNombreAuto()){
            console.log('hola xd');
            auto.eliminarAuto();
        }else{
            auto.agregarAuto();
        }
    })
}

export const estado_camara = {
    camaraActiva: new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000),
}


estado_camara.camaraActiva.position.set(17.47,-1.09,10.06);
estado_camara.camaraActiva.rotation.y = .9

function cambiarCamara(nueva_camara: THREE.PerspectiveCamera){
    estado_camara.camaraActiva = nueva_camara;
}

const s_camara_1: HTMLLIElement = document.querySelector('#camara_1')!;
const s_camara_2: HTMLLIElement = document.querySelector('#camara_2')!;
const s_camara_3: HTMLLIElement = document.querySelector('#camara_3')!;

const camera1: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(60, window.innerWidth/ window.innerHeight, 0.1, 1000);

const camera2: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(60, window.innerWidth/ window.innerHeight, 0.1, 1000);
const camera3: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(60, window.innerWidth/ window.innerHeight, 0.1, 1000);

s_camara_1.addEventListener('click', () => {
    cambiarCamara(camera1);
    camera1.position.set(17.47,-1.09,10.06);
    camera1.rotation.y = .9;

})

s_camara_2.addEventListener('click', () => {
    cambiarCamara(camera2);
    camera2.position.set(1.96, -1.42, 20.79)


})

s_camara_3.addEventListener('click', () => {
    cambiarCamara(camera3);
    camera3.position.set(-8,-1.09,1);
    camera3.rotation.y = 4;
})