import { AUTO, Game } from 'phaser'
import { useEffect, useRef } from 'react'

import { MyGame } from '../MyGame'
import styles from './PhaserApp.module.css'

const PhaserApp = () => {
  const game = useRef<Game | null>(null)

  useEffect(() => {
    const config = {
      parent: 'phaser-game',
      type: AUTO,
      width: 1200,
      height: 800,
      scene: MyGame,
    }

    if (game.current) {
      game.current.destroy(true)
    }
    game.current = new Game(config)
  })

  return <div id="phaser-game" className={styles.container}></div>
}

export default PhaserApp
