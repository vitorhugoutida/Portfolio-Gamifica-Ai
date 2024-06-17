import { Color, Engine, Fade, FadeInOut, Scene, SceneActivationContext, Transition } from "excalibur";

export class caseScene extends Scene {

    //  Declaração do elementoTexto
    caseCardA?: HTMLElement

    private objetoInteracao: any

    private textoDaCena?: string = ""

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // this.caseCardA = document.createElement("div") as HTMLElement

        // //  Definir opacidade do elemento para 1 = visível
        // this.caseCardA.style.opacity = "1"

        // // Inserir elementoTexto no container-game
        // let containerGame = document.querySelector(".container-game") as HTMLElement
        // containerGame.appendChild(this.caseCardA)

        // // Adicionar classe na div criada (card-mesa-a)
        // this.caseCardA.classList.add("card-mesa-a")

        // // Adicionar titulo e paragrafo dentro do conteudo da div
        // // <img src="" alt="">
        
        // this.caseCardA.innerHTML = `
        // <img src="src/images/mc cantando para ganhar mc frita.jpg" alt="Foto de Mc Donalds, ganha um batata frita extra so que pedisse cantando">
        // <p>Em 2023, o McDonald's lançou a campanha "Cantando no Drive", os clientes pode ganhavam uma batata extra ao pedir uma oferta de Big Mac, bebida e batata no drive-thru, mas só se pedisse cantando. </p>`
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada 
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        // Se for a mesa a
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"

            this.caseCardA = document.createElement("div") as HTMLElement

        //  Definir opacidade do elemento para 1 = visível
        this.caseCardA.style.opacity = "1"

        // Inserir elementoTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.caseCardA)

        // Adicionar classe na div criada (card-mesa-a)
        this.caseCardA.classList.add("card-mesa-a")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        // <img src="" alt="">
        
        this.caseCardA.innerHTML = `
        <img src="src/images/mc cantando para ganhar mc frita.jpg" alt="Foto de Mc Donalds, ganha um batata frita extra so que pedisse cantando">
        <p>Em 2023, o McDonald's lançou a campanha "Cantando no Drive", os clientes pode ganhavam uma batata extra ao pedir uma oferta de Big Mac, bebida e batata no drive-thru, mas só se pedisse cantando. </p>`
        }



        // Se for a mesa b
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"

            this.caseCardB = document.createElement("div") as HTMLElement

        //  Definir opacidade do elemento para 1 = visível
        this.caseCardB.style.opacity = "1"

        // Inserir elementoTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.caseCardB)

        // Adicionar classe na div criada (card-mesa-a)
        this.caseCardB.classList.add("card-mesa-b")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        
        this.caseCardB.innerHTML = `
    <img src="src/images/duolingo.jpg" alt="Foto de aplicativo do duolingo">
    <p>Em 2012, criamos um aplicativo de aprendizagem de idiomas que utiliza elementos de gamificação para motivar os usuários a praticar idiomas todos os dias</p>`
        }

        // Se for a mesa c
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"

            this.caseCardC = document.createElement("div") as HTMLElement

        //  Definir opacidade do elemento para 1 = visível
        this.caseCardC.style.opacity = "1"

        // Inserir elementoTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.caseCardC)

        // Adicionar classe na div criada (card-mesa-a)
        this.caseCardC.classList.add("card-mesa-c")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        
    //     this.caseCardC.innerHTML = `
    // <img src="src/images/duolingo.jpg" alt="Foto de aplicativo do duolingo">
    // <p>A Nike implementou a gamificação no seu aplicativo Nike+, que incentiva os usuários a estabelecerem metas diárias de corrida para competir uns com os outros</p>`
        }
    }
}