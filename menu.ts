import { Auto } from "./auto.js";
import { fiat, malibu, jeep } from "./app.js";

const v_malibu: HTMLLIElement = document.querySelector('#v_malibu')!;
const v_jeep: HTMLLIElement = document.querySelector('#v_jeep')!;
const v_fiat: HTMLLIElement = document.querySelector('#v_fiat')!;




v_malibu.addEventListener('click', () => {
    console.log('Malibu');
    malibu.agregarAuto();
    Auto.eliminarAuto(jeep.getAuto());
    Auto.eliminarAuto(fiat.getAuto());
})

v_jeep.addEventListener('click', () => {
    console.log('Jeep');
})

v_fiat.addEventListener('click', () => {
    console.log('Fiat')
})


function seleccionarAuto(){
    
}