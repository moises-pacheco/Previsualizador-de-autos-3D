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
      const hora = String(this.dia_info.getHours()).padStart(2, '0') + ":" + String(this.dia_info.getMinutes()).padStart(2, '0');
      this.hora.textContent = hora;
      this.dia.textContent = this.obtenerDia();
    },1000)

  }

  obtenerDia() {
    let dia = "";
    switch (this.dia_info.getDay().toString()) {
      case "1":
        dia = "lun.";
        break;
      case "2":
        dia = "mar.";
        break;
      case "3":
        dia = "mie.";
        break;
      case "4":
        dia = "jue.";
        break;
      case "5":
        dia = "vie.";
        break;
      case "6":
        dia = "sáb.";
        break;
      case "7":
        dia = "dom.";
        break;
    }

    return dia;
  }
}
