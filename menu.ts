import { Auto } from "./auto.js";
import { fiat, malibu, jeep } from "./app.js";
import * as THREE from 'three';
import { Cancion } from "./radio/radio-archivos/cancion.js";
import { Radio } from "./radio/radio-archivos/radio.js";

//SELECCIÓN DE AUTOS

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
            auto.eliminarAuto();
        }else{
            auto.agregarAuto();
        }
    })
}

//SELECCIÓN DE CÁMARAS

export const estado_camara = {
    camaraActiva: new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000),
}

//Cámara predeterminada
estado_camara.camaraActiva.position.set(17.47,-1.09,12.06);
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

//Cámaras que se pueden seleccionar en el menú
//Primera cámara
s_camara_1.addEventListener('click', () => {
    cambiarCamara(camera1);
    camera1.position.set(17.47,-1.09,12.06);
    camera1.rotation.y = .9;

})
//Segunda cámara

s_camara_2.addEventListener('click', () => {
    cambiarCamara(camera2);
    camera2.position.set(1.96, -1.42, 20.79)


})

//Tercera cámara

s_camara_3.addEventListener('click', () => {
    cambiarCamara(camera3);
    camera3.position.set(-8,-1.09,1);
    camera3.rotation.y = 4;
})


//Archivos música

const teen = new Cancion('/radio/canciones/8TEEN - Ryan Librada.m4a', '/radio/img/8teen.jpg', '8TEEN', 'Ryan Librada');
const let_me_oh = new Cancion('/radio/canciones/E dubble - Let Me Oh.m4a', '/radio/img/let_me_oh.jpg', 'Let Me Oh', 'E dubble');
const bless_my_soul = new Cancion('/radio/canciones/JERHELL - Bless my soul.m4a', '/radio/img/bless.jpg', 'Bless my soul', 'JERHELL');
const la_temp = new Cancion('/radio/canciones/Le Temp - Ryan Librada.m4a', '/radio/img/la_temp.jpg', 'La Temp', 'Ryan Librada');
const silhouette = new Cancion('/radio/canciones/silhouette - ghosthands.m4a', '/radio/img/silhouette.jpg', 'silhouette', 'ghosthands');
const where_d_you_go = new Cancion('/radio/canciones/Whered You Go - Ryan Librada.m4a', '/radio/img/where_you_go.jpg', 'Where You Go', 'Ryan Librada');
const write_it_off = new Cancion('/radio/canciones/Write It Off  - Ryan Librada.m4a', '/radio/img/write_it_off.jpg', 'Write It Off', 'Ryan Librada');

const canciones: Cancion[] = [teen, let_me_oh, bless_my_soul, la_temp, silhouette, where_d_you_go, write_it_off];
const radio = new Radio(canciones);

//Botones y parrafos para la radio

const anterior_cancion:HTMLButtonElement = document.querySelector('#anterior_cancion')!;
const empezar_cancion: HTMLButtonElement = document.querySelector('#empezar_cancion')!;
const pausar_cancion:HTMLButtonElement = document.querySelector('#pausar_cancion')!;
const siguiente_cancion: HTMLBRElement = document.querySelector('#siguiente_cancion')!;
const cancion_input: HTMLAudioElement = document.querySelector('#cancion_input')!;
const img_cancion: HTMLImageElement = document.querySelector('#img_cancion')!;
const nombre_cancion: HTMLElement = document.querySelector('#nombre_cancion')!;
const nombre_artista: HTMLElement = document.querySelector('#nombre_artista')!;

empezar_cancion.addEventListener('click', () => {
    const cancion = radio.generarMusicaAleatorio();
    cancion_input.src = cancion!.getUrl();
    img_cancion.src = cancion!.getImg();
    nombre_cancion.textContent = `${cancion?.getNombreCancion()}`
    nombre_artista.textContent = `${cancion?.getArtista()}`

    cancion_input.play();
})



//SELECCIÓN DE MÚSICA

const encender: HTMLLIElement = document.querySelector('#radio_encender')!;
const apagar: HTMLLIElement = document.querySelector('#radio_apagar')!;
const radio_seccion: HTMLDivElement = document.querySelector('#radio')!;

//Muestra la sección de la radio
encender.addEventListener('click', () => {
    radio_seccion.style.visibility = 'visible';
    radio_seccion.style.opacity = '1';
})
//Desaparece la sección de la radio.
apagar.addEventListener('click', () => {
    radio_seccion.style.visibility = 'hidden';
    radio_seccion.style.opacity = '0';
})
