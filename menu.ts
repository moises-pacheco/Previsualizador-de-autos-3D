import { Auto } from "./auto.js";
import { fiat, malibu, jeep } from "./app.js";


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