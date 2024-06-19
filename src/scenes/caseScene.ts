import { Actor, Color, Engine, Fade, FadeInOut, Keys, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any
    private elementoTexto?: HTMLElement
    private actorEmpresa?: Actor

    private listaImagens?: Sprite[]

    private textoDaCena?: string = ""

    

    //  Declaração do elementoTexto
    // caseCardA?: HTMLElement
    // caseCardB: HTMLElement | undefined;
    // caseCardC: HTMLElement | undefined;

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

         // Criar elemento com a descrição do case
         this.elementoTexto = document.createElement("div") as HTMLElement
         this.elementoTexto.classList.add("texto-case")
 
         // Adicionar o elemento ao container game
         let containerGame = document.querySelector(".container-game")
         containerGame?.appendChild(this.elementoTexto)

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

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc, Keys.Enter) {
                // this.fadeOutElement(this.elementoHTML!)
                engine.goToScene("exposicao")
            }
        })

        // Criar actor para receber a imagem
        this.actorEmpresa = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight - 50)
        })

        // Carregar imagens das empresas
        let fotoMesaA = Resources.fotoMesaA.toSprite()
        let fotoMesaB = Resources.fotoMesaB.toSprite()
        let fotoMesaC = Resources.fotoMesaC.toSprite()

        this.listaImagens = [fotoMesaA, fotoMesaB, fotoMesaC]


    }

    

    onActivate(context: SceneActivationContext<unknown>): void {

         // Faz a caixa de texto aparecer ao chegar na cena
         this.elementoTexto!.style.opacity = "1"
        
         // Receber os dados passados pela cena anterior
         this.objetoInteracao = context.data


        // // Pegar dados vindos da cena passada 
        // this.objetoInteracao = context.data

        // console.log(this.objetoInteracao);

        // Se for a mesa a
        if (this.objetoInteracao.nomeDaMesa == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"

            // Mesa A detectada
            this.elementoTexto!.innerHTML = `
            
            <p>Em 2023, o McDonald's decidiu aumentar ainda mais seus lucros através da gamificação com uma ideia inovadora: lançou a campanha "Cantando no Drive". Nesta campanha, os clientes têm a oportunidade de ganhar uma batata extra ao pedirem uma oferta que inclui Big Mac, bebida e batata no drive-thru, mas com uma condição especial: precisam fazer o pedido cantando.

            O foco é aumentar o engajamento dos clientes e proporcionar uma experiência divertida e memorável durante a visita ao restaurante. A ideia por trás da campanha é criar um ambiente descontraído e promover interações positivas entre os funcionários e os clientes.
            
            Além de incentivar a participação dos clientes, também pode ter como objetivo aumentar o tempo de permanência dos clientes no drive-thru, gerando um aumento nas vendas totais do restaurante. A gamificação, nesse contexto, funciona como uma estratégia eficaz para atrair e reter clientes, ao mesmo tempo em que fortalece a identidade de marca do McDonald's como um lugar onde a diversão e a interatividade estão sempre presentes. </p>`

            // Inserir o sprite no actor da mesa A
            this.actorEmpresa?.graphics.add(this.listaImagens![0])

             // Mudar o zoom da imagem
             this.actorEmpresa!.graphics.current!.scale = vec(0.2, 0.2)

        //     this.caseCardA = document.createElement("div") as HTMLElement

        // //  Definir opacidade do elemento para 1 = visível
        // this.caseCardA.style.opacity = "1"

        // // Inserir elementoTexto no container-game
        // let containerGame = document.querySelector(".container-game") as HTMLElement
        // containerGame.appendChild(this.caseCardA)

        // // Adicionar classe na div criada (card-mesa-a)
        // this.caseCardA.classList.add("card-mesa-a")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        // <img src="" alt="">
        
        // this.caseCardA.innerHTML = `
        // <img src="src/images/mc cantando para ganhar mc frita.jpg" alt="Foto de Mc Donalds, ganha um batata frita extra so que pedisse cantando">
        // <p>Em 2023, o McDonald's decidiu aumentar ainda mais seus lucros através da gamificação com uma ideia inovadora: lançou a campanha "Cantando no Drive". Nesta campanha, os clientes têm a oportunidade de ganhar uma batata extra ao pedirem uma oferta que inclui Big Mac, bebida e batata no drive-thru, mas com uma condição especial: precisam fazer o pedido cantando.

        // O foco é aumentar o engajamento dos clientes e proporcionar uma experiência divertida e memorável durante a visita ao restaurante. A ideia por trás da campanha é criar um ambiente descontraído e promover interações positivas entre os funcionários e os clientes.
        
        // Além de incentivar a participação dos clientes, também pode ter como objetivo aumentar o tempo de permanência dos clientes no drive-thru, gerando um aumento nas vendas totais do restaurante. A gamificação, nesse contexto, funciona como uma estratégia eficaz para atrair e reter clientes, ao mesmo tempo em que fortalece a identidade de marca do McDonald's como um lugar onde a diversão e a interatividade estão sempre presentes. </p>`
        }



        // Se for a mesa b
        if (this.objetoInteracao.nomeDaMesa == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"

             // Mesa B detectada
             this.elementoTexto!.innerHTML = `
             <p>O Duolingo foi lançado em 2012 como um inovador aplicativo de aprendizagem de idiomas que revolucionou a forma como as pessoas estudam novas línguas. Utilizando a gamificação de maneira inteligente, transformou o aprendizado de idiomas em uma experiência divertida e acessível para todos. A plataforma permite que os usuários pratiquem qualquer idioma, em qualquer quantidade de tempo, todos os dias, adaptando-se perfeitamente às agendas variadas dos usuários.

    A chave do sucesso do Duolingo está na combinação de elementos educativos com elementos lúdicos. A gamificação oferece aos usuários recompensas virtuais, como pontos e distintivos, por completarem lições e exercícios, incentivando assim a prática constante e a superação de desafios. Esse sistema não só motiva os estudantes a progredirem em seus estudos, mas também cria um ambiente envolvente e competitivo que aumenta a retenção e o engajamento.</p>`

            // Inserir o sprite no actor da mesa A
            this.actorEmpresa?.graphics.add(this.listaImagens![1])

            // Mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.2, 0.2)

    //         this.caseCardB = document.createElement("div") as HTMLElement

    //     //  Definir opacidade do elemento para 1 = visível
    //     this.caseCardB.style.opacity = "1"

    //     // Inserir elementoTexto no container-game
    //     let containerGame = document.querySelector(".container-game") as HTMLElement
    //     containerGame.appendChild(this.caseCardB)

    //     // Adicionar classe na div criada (card-mesa-a)
    //     this.caseCardB.classList.add("card-mesa-b")

    //     // Adicionar titulo e paragrafo dentro do conteudo da div
        
    //     this.caseCardB.innerHTML = `
    // <img src="src/images/duolingo.jpg" alt="Foto de aplicativo do duolingo">
    // <p>O Duolingo foi lançado em 2012 como um inovador aplicativo de aprendizagem de idiomas que revolucionou a forma como as pessoas estudam novas línguas. Utilizando a gamificação de maneira inteligente, transformou o aprendizado de idiomas em uma experiência divertida e acessível para todos. A plataforma permite que os usuários pratiquem qualquer idioma, em qualquer quantidade de tempo, todos os dias, adaptando-se perfeitamente às agendas variadas dos usuários.

    // A chave do sucesso do Duolingo está na combinação de elementos educativos com elementos lúdicos. A gamificação oferece aos usuários recompensas virtuais, como pontos e distintivos, por completarem lições e exercícios, incentivando assim a prática constante e a superação de desafios. Esse sistema não só motiva os estudantes a progredirem em seus estudos, mas também cria um ambiente envolvente e competitivo que aumenta a retenção e o engajamento.</p>`
        }

        // Se for a mesa c
        if (this.objetoInteracao.nomeDaMesa == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"

            // Mesa C detectada
            this.elementoTexto!.innerHTML = `
            
            <p>A Uber introduziu uma inovação significativa na indústria de transporte ao implementar um sistema de gamificação baseado em classificações por estrelas. Ao final de cada corrida, os passageiros têm a oportunidade de qualificar o desempenho do motorista com uma avaliação de uma a cinco estrelas. Essa medida simples fornece um feedback imediato sobre a qualidade do serviço e também cria um sistema de incentivos para os motoristas.

            A dinâmica é clara: os motoristas são incentivados a dirigir com segurança e cortesia, tratando os passageiros com respeito e profissionalismo, para garantir avaliações positivas. A gamificação desse processo melhora a qualidade do serviço prestado e aumenta a confiança dos passageiros na plataforma Uber.
            
            Além disso, o sistema de classificação por estrelas não apenas beneficia os passageiros, mas também os próprios motoristas. Aqueles que mantêm uma alta pontuação de estrelas têm maior probabilidade de receber mais corridas e aumentar sua renda.</p>`

            // Inserir o sprite no actor da mesa A
            this.actorEmpresa?.graphics.add(this.listaImagens![2])

            // Mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.2, 0.2)

    //         this.caseCardC = document.createElement("div") as HTMLElement

    //     //  Definir opacidade do elemento para 1 = visível
    //     this.caseCardC.style.opacity = "1"

    //     // Inserir elementoTexto no container-game
    //     let containerGame = document.querySelector(".container-game") as HTMLElement
    //     containerGame.appendChild(this.caseCardC)

    //     // Adicionar classe na div criada (card-mesa-a)
    //     this.caseCardC.classList.add("card-mesa-c")
        

    //     // Adicionar titulo e paragrafo dentro do conteudo da div
        
    //     this.caseCardC.innerHTML = `
    //     <img src="src/images/Destaque-avaliacao-de-usuario-do-Uber.jpg" alt="">
        
    // <p>A Uber introduziu uma inovação significativa na indústria de transporte ao implementar um sistema de gamificação baseado em classificações por estrelas. Ao final de cada corrida, os passageiros têm a oportunidade de qualificar o desempenho do motorista com uma avaliação de uma a cinco estrelas. Essa medida simples fornece um feedback imediato sobre a qualidade do serviço e também cria um sistema de incentivos para os motoristas.

    // A dinâmica é clara: os motoristas são incentivados a dirigir com segurança e cortesia, tratando os passageiros com respeito e profissionalismo, para garantir avaliações positivas. A gamificação desse processo melhora a qualidade do serviço prestado e aumenta a confiança dos passageiros na plataforma Uber.
    
    // Além disso, o sistema de classificação por estrelas não apenas beneficia os passageiros, mas também os próprios motoristas. Aqueles que mantêm uma alta pontuação de estrelas têm maior probabilidade de receber mais corridas e aumentar sua renda.</p>`
        }

        // Adiciona o actor da imagem na tela
        this.add(this.actorEmpresa!)
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // this.caseCardA?.remove()
        // this.caseCardB?.remove()
        // this.caseCardC?.remove()

        // Faz a caixa de texto desaparecer ao mudar de cena
        this.elementoTexto!.style.opacity = "0"
    }
}
