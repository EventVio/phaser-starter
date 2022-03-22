import { AUTO, Game } from 'phaser'
import { useEffect, useRef } from 'react'

import GameScene from '~/lib/GameScene'
import { LoaderScene } from '~/lib/LoaderScene'

import styles from './PhaserApp.module.css'

const PhaserApp = () => {
  const game = useRef<Game | null>(null)

  useEffect(() => {
    const config = {
      parent: 'phaser-game',
      type: AUTO,
      width: 256,
      height: 224,
      zoom: 3,
      input: {
        keyboard: true,
        gamepad: true,
      },
      render: {
        pixelArt: true,
        antialias: false,
        antialiasGL: false,
      },
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: {
            y: 500,
          },
        },
      },
      scene: [LoaderScene, GameScene],
    }

    if (game.current) {
      game.current.destroy(true)
    }
    game.current = new Game(config)
  })

  return <div id="phaser-game" className={styles.container}></div>
}

export default PhaserApp
