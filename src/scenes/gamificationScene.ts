import { Actor, Color, Engine, FadeInOut, Scene, Transition, vec, } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {

    //  Declaração do elementoTexto
    elementoHTML?: HTMLElement

    //  Método para esmaecerum elemento HTML 
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

     // Ao entrar ou sair da cena, ultiliza o efeito de transição lenta
    //  onTransition(direction: "in" | "out"): Transition | undefined {
    //     return new FadeInOut({
    //         direction: direction,
    //         color: Color.Black,
    //         duration: 1000
    //     })
    // }
    
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.elementoHTML = document.createElement("div") as HTMLElement
        this.elementoHTML.style.opacity = "1"

        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoHTML)

        this.elementoHTML.innerHTML = `<h2>O que é gamificação</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`

        this.elementoHTML.classList.add("sobre-gamificacao")

        // Carregando imagem
        let spriteLogoGamificaAi = Resources.LogoVertical.toSprite()
        spriteLogoGamificaAi.scale = vec(0.7, 0.7)

        // Criação do Actor para a imagem
        let actorLogoGamificaAi = new Actor({
            pos: vec(300, engine.halfDrawHeight)
            
        })
        
        actorLogoGamificaAi.graphics.add(spriteLogoGamificaAi)

        this.add(actorLogoGamificaAi)

        // let actorFotoGamificacao = new Actor({
        //     pos: vec(engine.drawWidth - 900, engine.halfDrawHeight)
        // })

        // // Carregando a imagem do logo

        // let fotoGamificacao = Resources.FotoGamificacao.toSprite()
        // fotoGamificacao.scale = vec(1, 1)

        // // Adicionar a imagem no actor
        // actorFotoGamificacao.graphics.add(fotoGamificacao)

        // // Renderizar o actor na cena
        // this.add(actorFotoGamificacao)

        // ----------------------------------------------------------

        // EXERCICIO fazer cena igual cena da history

        // consegui colocar texto e logo, porem nao consegui trocar imagem que combina do contexto do texto



        //  // Criar elemento com a descrição da empresa
        //  this.elementoTextoGamificacao = document.createElement("div") as HTMLElement

        //  //  Definir opacidade do elemento para 1 = visível
        //  this.elementoTextoGamificacao.style.opacity = "1"

        //  // Inserir elementoTexto no container-game
        //  let containerGame = document.querySelector(".container-game") as HTMLElement
        //  containerGame.appendChild(this.elementoTextoGamificacao)
 
        //  // Adicionar classe na div criada (elementoTexto)
        //  this.elementoTextoGamificacao.classList.add("sobre-gamificacao")
 
        //  // Adicionar titulo e paragrafo dentro do conteudo da div
 
        //  this.elementoTextoGamificacao.innerHTML = `<h2>O que é gamificação</h2>
        //  <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`
    }

}