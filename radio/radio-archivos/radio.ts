import { Cancion } from "./cancion.js";

export class Radio {
  private canciones: Cancion[];
  private cancion_seleccionada: Cancion | undefined;

  constructor(canciones: Cancion[]) {
    this.canciones = canciones;
  }


  agregarCancion(cancion: Cancion) {
    this.canciones.push(cancion);
  }

  generarMusicaAleatorio(){
    const numero_aleatorio = Math.floor(Math.random() * this.canciones.length);
    return this.cancion_seleccionada = this.canciones[numero_aleatorio];
  }

  getCancion(){
    return this.cancion_seleccionada;
  }
}
