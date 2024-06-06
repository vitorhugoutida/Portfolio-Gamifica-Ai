import { Actor, Color, Engine, Fade, FadeInOut, Keys, Resource, Scene, Timer, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { delay } from "excalibur/build/dist/Util/Util";
// import { Resources } from "../resources";

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

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                // Direcionar para a próxima cena
                engine.goToScene("gamificacao")

                setTimeout( () => { 
                    this.elementoTexto.style.opacity = "0.98"


                    setTimeout( () => { 
                        this.elementoTexto.style.opacity = "0.96"


                        setTimeout( () => { 
                            this.elementoTexto.style.opacity = "0.94"
    

                            setTimeout( () => { 
                                this.elementoTexto.style.opacity = "0.92"
        

                                setTimeout( () => { 
                                    this.elementoTexto.style.opacity = "0.90"
            

                                    setTimeout( () => { 
                                        this.elementoTexto.style.opacity = "0.88"
                

                                        setTimeout( () => { 
                                            this.elementoTexto.style.opacity = "0.86"
                    

                                            setTimeout( () => { 
                                                this.elementoTexto.style.opacity = "0.84"
                        

                                                setTimeout( () => { 
                                                    this.elementoTexto.style.opacity = "0.82"
                            

                                                    setTimeout( () => { 
                                                        this.elementoTexto.style.opacity = "0.80"
                        

                                                        setTimeout( () => { 
                                                            this.elementoTexto.style.opacity = "0.78"
                            

                                                            setTimeout( () => { 
                                                                this.elementoTexto.style.opacity = "0.76"
                                

                                                                setTimeout( () => { 
                                                                    this.elementoTexto.style.opacity = "0.74"
                                    

                                                                    setTimeout( () => { 
                                                                        this.elementoTexto.style.opacity = "0.72"
                                        

                                                                        setTimeout( () => { 
                                                                            this.elementoTexto.style.opacity = "0.70"
                                            

                                                                            setTimeout( () => { 
                                                                                this.elementoTexto.style.opacity = "0.68"
                                                

                                                                                setTimeout( () => { 
                                                                                    this.elementoTexto.style.opacity = "0.66"
                                                    

                                                                                    setTimeout( () => { 
                                                                                        this.elementoTexto.style.opacity = "0.64"

                                                                                        setTimeout( () => { 
                                                                                            this.elementoTexto.style.opacity = "0.62"

                                                                                            setTimeout( () => { 
                                                                                                this.elementoTexto.style.opacity = "0.6"

                                                                                                setTimeout( () => { 
                                                                                                    this.elementoTexto.style.opacity = "0.58"

                                                                                                    setTimeout( () => { 
                                                                                                        this.elementoTexto.style.opacity = "0.56"

                                                                                                        setTimeout( () => { 
                                                                                                            this.elementoTexto.style.opacity = "0.54"

                                                                                                            setTimeout( () => { 
                                                                                                                this.elementoTexto.style.opacity = "0.52"

                                                                                                                setTimeout( () => { 
                                                                                                                    this.elementoTexto.style.opacity = "0.5"

                                                                                                                    setTimeout( () => { 
                                                                                                                        this.elementoTexto.style.opacity = "0.48"

                                                                                                                        setTimeout( () => { 
                                                                                                                            this.elementoTexto.style.opacity = "0.46"

                                                                                                                            setTimeout( () => { 
                                                                                                                                this.elementoTexto.style.opacity = "0.44"

                                                                                                                                setTimeout( () => { 
                                                                                                                                    this.elementoTexto.style.opacity = "0.42"

                                                                                                                                    setTimeout( () => { 
                                                                                                                                        this.elementoTexto.style.opacity = "0.4"

                                                                                                                                        setTimeout( () => { 
                                                                                                                                            this.elementoTexto.style.opacity = "0.38"

                                                                                                                                            setTimeout( () => { 
                                                                                                                                                this.elementoTexto.style.opacity = "0.36"

                                                                                                                                                setTimeout( () => { 
                                                                                                                                                    this.elementoTexto.style.opacity = "0.34"

                                                                                                                                                    setTimeout( () => { 
                                                                                                                                                        this.elementoTexto.style.opacity = "0.32"

                                                                                                                                                        setTimeout( () => { 
                                                                                                                                                            this.elementoTexto.style.opacity = "0.3"

                                                                                                                                                            setTimeout( () => { 
                                                                                                                                                                this.elementoTexto.style.opacity = "0.28"

                                                                                                                                                                setTimeout( () => { 
                                                                                                                                                                    this.elementoTexto.style.opacity = "0.26"

                                                                                                                                                                    setTimeout( () => { 
                                                                                                                                                                        this.elementoTexto.style.opacity = "0.24"

                                                                                                                                                                        setTimeout( () => { 
                                                                                                                                                                            this.elementoTexto.style.opacity = "0.22"

                                                                                                                                                                            setTimeout( () => { 
                                                                                                                                                                                this.elementoTexto.style.opacity = "0.2"

                                                                                                                                                                                setTimeout( () => { 
                                                                                                                                                                                    this.elementoTexto.style.opacity = "0.18"

                                                                                                                                                                                    setTimeout( () => { 
                                                                                                                                                                                        this.elementoTexto.style.opacity = "0.16"

                                                                                                                                                                                        setTimeout( () => { 
                                                                                                                                                                                            this.elementoTexto.style.opacity = "0.14"

                                                                                                                                                                                            setTimeout( () => { 
                                                                                                                                                                                                this.elementoTexto.style.opacity = "0.12"

                                                                                                                                                                                                setTimeout( () => { 
                                                                                                                                                                                                    this.elementoTexto.style.opacity = "0.1"

                                                                                                                                                                                                    setTimeout( () => { 
                                                                                                                                                                                                        this.elementoTexto.style.opacity = "0.08"

                                                                                                                                                                                                        setTimeout( () => { 
                                                                                                                                                                                                            this.elementoTexto.style.opacity = "0.06"

                                                                                                                                                                                                            setTimeout( () => { 
                                                                                                                                                                                                                this.elementoTexto.style.opacity = "0.04"

                                                                                                                                                                                                                setTimeout( () => { 
                                                                                                                                                                                                                    this.elementoTexto.style.opacity = "0.02"

                                                                                                                                                                                                                    setTimeout( () => { 
                                                                                                                                                                                                                        this.elementoTexto.style.opacity = "0"
                                                                                                                                                                                        
                                                                                            
                                                                                                                                                                                                                     }, 20 );
                                                                                                                                                                                                                 }, 20 );
                                                                                                                                                                                                             }, 20 );
                                                                                                                                                                                                         }, 20 );
                                                                                                                                                                                                     }, 20 );
                                                                                                                                                                                                 }, 20 );
                                                                                                                                                                                             }, 20 );
                                                                                                                                                                                         }, 20 );
                                                                                                                                                                                     }, 20 );
                                                                                                                                                                                 }, 20 );
                                                                                                                                                                             }, 20 );
                                                                                                                                                                         }, 20 );
                                                                                                                                                                     }, 20 );
                                                                                                                                                                 }, 20 );
                                                                                                                                                             }, 20 );
                                                                                                                                                         }, 20 );
                                                                                                                                                     }, 20 );
                                                                                                                                                 }, 20 );
                                                                                                                                             }, 20 );
                                                                                                                                         }, 20 );
                                                                                                                                     }, 20 );
                                                                                                                                 }, 20 );
                                                                                                                             }, 20 );
                                                                                                                         }, 20 );
                                                                                                                     }, 20 );
                                                                                                                 }, 20 );
                                                                                                             }, 20 );
                                                                                                         }, 20 );
                                                                                                     }, 20 );
                                                                                                 }, 20 );
                                                                                             }, 20 );
                                                                                         }, 20 );
                                                                                     }, 20 );
                                                                                 }, 20 );
                                                                             }, 20 );
                                                                         }, 20 );
                                                                     }, 20 );
                                                                 }, 20 );
                                                             }, 20 );
                                                         }, 20 );
                                                     }, 20 );
                                                 }, 20 );
                                             }, 20 );
                                         }, 20 );                    
                                     }, 20 );               
                                 }, 20 );            
                             }, 20 );       
                         }, 20 );   
                     }, 20 );
                 }, 20 );
            }
        })
    }
}