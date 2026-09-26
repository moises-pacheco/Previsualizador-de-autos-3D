export class Animacion {

    private div_animacion: HTMLElement;
    private ventanas: HTMLElement[];

    constructor(div_animacion: HTMLElement) {
        this.div_animacion = div_animacion;
        this.ventanas = [];
    }

    iniciarAnimacion() {
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                this.ventanas.forEach((elemento) => {
                    if (elemento != null) {
                        console.log(elemento);
                        elemento.classList.add('ventana-encendida');
                        this.div_animacion.classList.add('intro-silueta-expandida');
                    }
                })
            }, 800)
        })
    }


    agregarElemento(elemento_html: HTMLElement) {
        this.ventanas.push(elemento_html);
    }
}