import { Actor, CollisionType, Color, Engine, FadeInOut, Resource, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
// import { Npc } from "../actors/npc-a";

export class expoScene extends Scene {

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {

        // Ativar o modo DEBUG

        engine.toggleDebug()

        // Carregar musica de fundo (BGM) - BackGround Music

        let musicaFundo = Resources.RitmadaBGM

        // Configurar a musica e excutar 
        musicaFundo.loop = true
        // musicaFundo.play(0.5)


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

        // Carregar spawn point do player

        let spawnPoint = tiledMap.getObjectsByName("player_spawn")[0]

        // Criação e configuracao do player
        let jogador = new Player(vec(spawnPoint.x + offsetX, spawnPoint.y + offsetY))

        // Define z-index do player, util se algum outro elemento ficar "por cima do jogador"
        jogador.z = 1

        // Adicionar o player na cena
        this.add(jogador)

        // Pegar spawn Points dos NPCs
        let npcSpawnPointA = tiledMap.getObjectsByName("npc_a")[0]
        let npcSpawnPointB = tiledMap.getObjectsByName("npc_b")[0]
        let npcSpawnPointC = tiledMap.getObjectsByName("npc_c")[0]

        // Configurar NPCs

        // let npcA = new NpcA(
        //     vec(npcSpawnPointA.x + offsetX, npcSpawnPointA.y + offsetY),
        //     Color.Blue,
        //     "NpcA"
        // )

        // let npcB = new NpcB(
        //     vec(npcSpawnPointB.x + offsetX, npcSpawnPointB.y + offsetY),
        //     Color.Chartreuse,
        //     "NpcB"
        // )

        // let npcC = new NpcC(
        //     vec(npcSpawnPointC.x + offsetX, npcSpawnPointC.y + offsetY),
        //     Color.Yellow,
        //     "NpcC"
        // )

        // Adicionar os NPCs

        // this.add(npcA)
        // this.add(npcB)
        // this.add(npcC)

        // Focar a camera no player
        this.camera.strategy.lockToActor(jogador)
        
        // Zoom da camera

        // this.camera.zoom = 2



        // Adicionar colisão com cada objeto
        // Pegar a camada de objetos colisores

        let camadaObjetosColisores = tiledMap.getObjectLayers("ObjetosColisores")[0]

        // console.log(camadaObjetosColisores)

        // Percorrer objetos com foreeach e para cada objeto, renderizar um actor
        camadaObjetosColisores.objects.forEach(objeto => {
            // configurar o actor
            const objetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
                z: 99
            })

            // Adicionar o colisor do objeto na cena
            this.add(objetoAtual)
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