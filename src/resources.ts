import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logoVertical from "./images/logo-vertical.png";
import fotoGamificacao from "./images/foto-gamificacao.jpg";
import fotoMesaA from "./images/mc cantando para ganhar mc frita.jpg";
import fotoMesaB from "./images/duolingo.jpg";
import fotoMesaC from "./images/Destaque-avaliacao-de-usuario-do-Uber.jpg"

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url";

import tsxParedesPath from "./maps/tileset_paredes.tsx?url";
import tsxGenericPath from "./maps/tileset_generic.tsx?url";
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url";
import tsxBibliotecaPath from "./maps/tileset_biblioteca.tsx?url";

import tmxMapaPath from "./maps/showroom_map.tmx?url";

import playerSpritePath from "./sprites/jogador_character.png";

import npcASpriteSheet from "./sprites/npc_a_character.png";
import npcBSpriteSheet from "./sprites/npc_b_character.png";
import npcCSpriteSheet from "./sprites/npc_c_character.png";

import ritmada from "./sounds/ritmada_zelda.mp3";
import classico from "./sounds/zelda.mp3";

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),

  PlayerSpriteSheet: new ImageSource(playerSpritePath, {filtering: ImageFiltering.Pixel }),
  NpcASpriteSheet: new ImageSource(npcASpriteSheet, { filtering: ImageFiltering.Pixel }),
  NpcBSpriteSheet: new ImageSource(npcBSpriteSheet, { filtering: ImageFiltering.Pixel }),
  NpcCSpriteSheet: new ImageSource(npcCSpriteSheet, { filtering: ImageFiltering.Pixel }),

  fotoMesaA: new ImageSource(fotoMesaA),
  fotoMesaB: new ImageSource(fotoMesaB),
  fotoMesaC: new ImageSource(fotoMesaC),

  LogoVertical: new ImageSource(logoVertical),
  RitmadaBGM: new Sound(ritmada),
  ClassicBGM: new Sound(classico),
  FotoGamificacao: new ImageSource(fotoGamificacao),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      { path: "showroom_map.tmx", output: tmxMapaPath},
      { path: "Room_Builder_32x32.png", output: pngTilesetPath},
      { path: "tileset_paredes.tsx", output: tsxParedesPath},
      { path: "tileset_generic.tsx", output:tsxGenericPath},
      { path: "tileset_estoque.tsx", output:tsxEstoquePath},
      { path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath},
    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
