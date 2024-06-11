import { Color, Engine, FadeInOut, Resource, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

export class expoScene extends Scene {

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Carregar o mapa
        let tiledMap = Resources.Mapa

        // Definir offset para renderização do mapa

        let offsetX = 138
        let offsetY = 100        

        // Adicionar o mapa na cena 



        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),
        })

        // Definir zoom da camera para aumentar um pouco a visualização

        this.camera.zoom = 1.4

        // Criação e configuracao do player
        let jogador = new Player()

        // Define z-index do player, util se algum outro elemento ficar "por cima do jogador"
        jogador.z = 1

        // Adicionar o player na cena
        this.add(jogador)
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