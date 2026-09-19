export class Cancion {

  private ruta_cancion: string;
  private ruta_img_cancion: string;
  private nombre_cancion: string;
  private nombre_artista: string;

  constructor(ruta_cancion: string, ruta_img_cancion: string, nombre_cancion: string, nombre_artista: string) {
    this.ruta_cancion = ruta_cancion;
    this.ruta_img_cancion = ruta_img_cancion;
    this.nombre_cancion = nombre_cancion;
    this.nombre_artista = nombre_artista;
  };

  getUrl(){
    return this.ruta_cancion;
  }

  getImg(){
    return this.ruta_img_cancion;
  }

  getNombreCancion(){
    return this.nombre_cancion;
  }

  getArtista(){
    return this.nombre_artista;
  }



  
}
