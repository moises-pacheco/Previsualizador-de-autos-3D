import { Cancion } from "./cancion.js";

class Radio {
  private canciones: Cancion[];
  private cancion_seleccionada: Cancion | undefined;

  constructor() {
    this.canciones = [];
  }

  reproducirRadio(){
    return this.canciones[this.generarNumeroAleatorio()];
  }

  agregarCancion(cancion: Cancion) {
    this.canciones.push(cancion);
  }

  generarNumeroAleatorio(){
    const numero_aleatorio = Math.floor(Math.random() * this.canciones.length);
    return numero_aleatorio;
  }
}
