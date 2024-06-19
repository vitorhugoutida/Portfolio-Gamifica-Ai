import { Actor, Collider, CollisionType, Color, Engine, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../resources";

export class NpcA extends Actor {

    // Propriedades do player

    private velocidade: number = 180
    private ultimaDirecao: string = "down"

    private temObjetoProximo: boolean = false

    private ultimoColisor?: Collider
    
    constructor(posicao: Vector, cor: Color, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: "Npc-A",
            color: cor,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine: Engine<any>): void { 

        // Configurar spriteSheet do player

        const NpcASpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.NpcASpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0.4,

                }

                
            }
        })

         // Criar as animações
         const duracaoFrameAnimacao = 70

        // downIdle

        // const downIdleA = new Animation({
        //     frames: [
        //         { graphic: NpcASpriteSheet.getSprite(18, 1) },
        //         { graphic: NpcASpriteSheet.getSprite(19, 1) },
        //         { graphic: NpcASpriteSheet.getSprite(20, 1) },
        //         { graphic: NpcASpriteSheet.getSprite(21, 1) },
        //         { graphic: NpcASpriteSheet.getSprite(22, 1) },
        //         { graphic: NpcASpriteSheet.getSprite(23, 1) },
        //     ],
        //     frameDuration: duracaoFrameAnimacao

        // })

        // this.graphics.add("down-idle-a", downIdleA)
        
    }

    
}