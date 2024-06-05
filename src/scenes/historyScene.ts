import { Actor, Color, Engine, FadeInOut, Keys, Resource, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class historyScene extends Scene {
    //  Declaração do elementoTexto
    elementoTexto?: HTMLElement

    // Ao entrar ou sair da cena, ultiliza o efeito de transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        // Criar elemento com a descrição da empresa
        this.elementoTexto = document.createElement("div") as HTMLElement

        //  Definir opacidade do elemento para 1 = visível
        this.elementoTexto.style.opacity = "1"

        // Inserir elementoTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("sobre-gamifica")

        // Adicionar titulo e paragrafo dentro do conteudo da div

        this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
          usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
          experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
          equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
          desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`


        // // Exercicio colocar imagem logo vertical

        //  //  Configurar Actor do logo
        //  let actorLogoVertical = new Actor({
        //     pos: vec(engine.drawWidth / 1.3, engine.drawHeight / 2)
        // })

        // // Ultilizar imagem do logo
        // let imagemLogoVertical = Resources.LogoVertical.toSprite()

        // // Aplicar zoom na imagem - 40%  de x, e 40% de y
        // imagemLogoVertical.scale = vec(0.7, 0.7)

        // // Configurar o actor para usar a imagem
        // actorLogoVertical.graphics.add(imagemLogoVertical)
        

        // // Adicionando Actor Logo na tela
        // this.add(actorLogoVertical)

        let actorLogoVertical = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight)
        })

        // Carregando a imagem do logo

        let imagemLogoVertical = Resources.LogoVertical.toSprite()
        imagemLogoVertical.scale = vec(0.7, 0.7)

        // Adicionar a imagem no actor
        actorLogoVertical.graphics.add(imagemLogoVertical)

        // Renderizar o actor na cena
        this.add(actorLogoVertical)

        // Configurar a cena para monitorar o evento de tecla pressionada

        // Monitora o evento de tecla pressionada
        this.input.keyboard.on("press", (event) => {
            // Caso a tecla pressionada for "Enter", deve ir para a proxima cena
            if (event.key == Keys.Enter) {
                // Direciona para a cena historia
                engine.goToScene("gamificacao")
            }
        })
    }

    }


