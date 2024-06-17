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
        <p>abwydwadiyuavwdyvaidwayvdiyawdvwiayvuayvisddwaaaaaaaaaaaaaaaaaaaaaaaaaaaaduwdobiuawbduabduwadbuawbdodbwadbukwadbakwbdwuabdauldbwalbdawbjdawd wuabublaubklubwuabcuwa ljdludldwknlawhkufj</p>`
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada 
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        // Se for a mesa a
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"
        }

        // Se for a mesa b
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"
        }

        // Se for a mesa c
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"
        }
    }
}