export class Cancion {

  private cancion: File | undefined;
  private img_cancion: File | undefined;
  private nombre_cancion: string;
  private nombre_artista: string;

  constructor(cancion: File, img_cancion: File, nombre_cancion: string, nombre_artista: string) {
    this.cancion = cancion;
    this.img_cancion = img_cancion;
    this.nombre_cancion = nombre_cancion;
    this.nombre_artista = nombre_artista;
  };

  getUrl(){
    return `/radio/canciones/${this.cancion?.name}`;
  }

  getImg(){
    return `/radio/img/${this.img_cancion?.name}`
  }

  getNombreCancion(){
    return this.nombre_cancion;
  }

  getArtista(){
    return this.nombre_artista;
  }


  
}
