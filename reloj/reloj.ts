export class Reloj {

  private hora: HTMLElement;
  private dia: HTMLElement;


  private dia_info: Date;
  private hora_date: string;
  private minutes_date: string;

  constructor(hora: HTMLElement, dia: HTMLElement) {
    this.hora = hora;
    this.dia = dia;
    this.dia_info = new Date();
    this.hora_date = this.dia_info.getHours().toString();
    this.minutes_date = this.dia_info.getMinutes().toString();
  }

  obtenerInterfaz() {
    setInterval(() => {
      this.dia_info = new Date();
      console.log("Hola");
      const hora = this.dia_info.getHours().toString() + ":" + this.dia_info.getMinutes().toString();
      this.hora.textContent = hora;
      this.dia.textContent = this.obtenerDia();
    },1000)

  }

  obtenerDia() {
    let dia = "";
    switch (this.dia_info.getDay().toString()) {
      case "1":
        dia = "Lunes";
        break;
      case "2":
        dia = "Martes";
        break;
      case "3":
        dia = "Miércoles";
        break;
      case "4":
        dia = "Jueves";
        break;
      case "5":
        dia = "Viernes";
        break;
      case "6":
        dia = "Sábado";
        break;
      case "7":
        dia = "Domingo";
        break;
    }

    return dia;
  }
}
