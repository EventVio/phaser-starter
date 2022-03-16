import { Scene } from 'phaser'

import logo from '~/assets/jnht-logo.png'

export class MyGame extends Scene {
  preload = () => {
    this.load.image('logo', logo.src)
  }

  create = () => {
    const { width: w, height: h } = this.game.canvas
    this.add.image(w / 2, h / 2, 'logo')
  }

  update = () => {}
}
