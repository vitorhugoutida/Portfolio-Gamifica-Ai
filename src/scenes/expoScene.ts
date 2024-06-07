import { Color, FadeInOut, Scene, Transition } from "excalibur";

export class expoScene extends Scene {

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    // elementoHTML?: HTMLElement

    // //  Método para esmaecerum elemento HTML 
    // fadeOutElement(elemento: HTMLElement) {
    //     let opacidade = parseFloat(elemento.style.opacity)

    //     // Repetir dimunição da opacidade
    //     setInterval(() => {
    //     // Se elemento ainda está visivel
    //     if (opacidade > 0) {
    //         // Dimunuir a opacidade
    //         opacidade = opacidade - 0.1

    //         // Atualizar a opacidade do elemento
    //         elemento.style.opacity = opacidade.toString()
    //     }
    //    }, 20)
    // }


}