
export class Main_menu extends Phaser.Scene {
    constructor() {
        super();
        this.tilemap = null
        this.tiles = null
        this.layer = null
    }
    
    preload() {
        this.load.image('ground', 'assets/ground.webp');
    }

    create() {
        this.tilemap = this.make.tilemap({
            tileWidth: 8,
            tileHeight: 8,
            width: 25,
            heigth: 20
        });
        this.tiles = this.tilemap.addTilesetImage('ground');
        this.layer = this.tilemap.createBlankLayer('ground_layer', this.tiles).setScale(4);

        this.layer.fill(0, 0, 0, 25, 25);
    }

    update() {

    }
}
