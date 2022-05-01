
import {Game_scene, UI_scene} from './game.js';

export const game_config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    backgroundColor: '#002222',
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            debug: true,
        }
    },
    scene: [Game_scene, UI_scene]
};
