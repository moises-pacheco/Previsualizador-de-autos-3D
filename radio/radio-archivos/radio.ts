import { Cancion } from "./cancion.js";

export class Radio {
  private canciones: Cancion[];
  private cancion_seleccionada: Cancion | undefined;
  private input_cancion: HTMLAudioElement;
  private imagen: HTMLImageElement;
  private nombre_cancion: HTMLElement;
  private artista: HTMLElement;
  private reproduciendo: boolean;
  private btn_empezar_cancion: HTMLElement;
  private posicion_array: number;

  constructor(
    canciones: Cancion[], input_cancion: HTMLAudioElement, imagen: HTMLImageElement, nombre_cancion: HTMLElement, artista: HTMLElement, btn_empezar_cancion: HTMLElement
  ) {
    this.canciones = canciones;
    this.input_cancion = input_cancion;
    this.imagen = imagen;
    this.nombre_cancion = nombre_cancion;
    this.artista = artista;
    this.reproduciendo = false;
    this.btn_empezar_cancion = btn_empezar_cancion;
    this.posicion_array = 0;
  }

  empezarCancion() {
    this.cancion_seleccionada = this.canciones[this.posicion_array];
    this.input_cancion.src = this.cancion_seleccionada!.getUrl();
    this.imagen.src = this.cancion_seleccionada!.getImg();
    this.nombre_cancion.textContent = this.cancion_seleccionada!.getNombreCancion();
    this.artista.textContent = this.cancion_seleccionada!.getArtista();
    this.input_cancion.play();
    this.input_cancion.volume = 0.04;
    this.reproduciendo = true;
    this.btn_empezar_cancion.textContent = "⏸";
    // console.log("Radio encendida");
    // console.log(this.reproduciendo);
  }


  reproducirCancion() {
    if (this.reproduciendo) {
      this.btn_empezar_cancion.textContent = "▶";
      this.input_cancion.pause();
      this.reproduciendo = false;
      // console.log("Radio pausada");
      // console.log(this.reproduciendo);
    } else {
      this.btn_empezar_cancion.textContent = "⏸";
      this.input_cancion.play();
      this.reproduciendo = true;
      // console.log("Radio reanudada");
      // console.log(this.reproduciendo);
    }
  }

  pausarCancion() {
    this.input_cancion.pause();
  }

  siguienteCancion() {
    if (this.posicion_array <= this.canciones.length -2) {
      this.posicion_array++;
      // console.log('Posición del array: ' + this.posicion_array + "Longitud del array: " + this.canciones.length)
      this.empezarCancion();
    }
  }

  anteriorCancion() {
    if (this.posicion_array > 0) {
      this.posicion_array--;
      // console.log('Posición del array: ' + this.posicion_array + "Longitud del array: " + this.canciones.length)
      this.empezarCancion();
    }
  }

  agregarCancion(cancion: Cancion) {
    this.canciones.push(cancion);
  }

  generarMusicaAleatorio() {
    const numero_aleatorio = Math.floor(Math.random() * this.canciones.length);
    return (this.cancion_seleccionada = this.canciones[numero_aleatorio]);
  }

  getCancion() {
    return this.cancion_seleccionada;
  }
}
