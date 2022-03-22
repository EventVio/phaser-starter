import { Scene } from 'phaser'

import jump from '~/assets/audio/jump.mp3'
import player from '~/assets/images/player.png'
import tiles from '~/assets/images/tiles.png'
import tilemap from '~/assets/tilemaps/tilemap.json'

export class LoaderScene extends Scene {
  preload = () => {
    this.load.tilemapTiledJSON('tilemap', tilemap)
    this.load.image('tiles', tiles.src)
    this.load.audio('jump', jump)
    this.load.spritesheet('player', player.src, {
      frameWidth: 16,
      frameHeight: 32,
    })
    this.load.image('tiles', tiles.src)
  }

  create = () => {
    this.scene.start('game')
  }

  update = () => {}
}
