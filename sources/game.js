
var player;
var target = new Phaser.Math.Vector2();
var graphics;
var last_tm;
var bullets;
var level_now;
var marker;
var map;
var map2;
var objectToPlace = 'platform';
var camer_scale = 1;
var tilemx;
var tilemy;
var mouse_last_x;
var mouse_last_y;
var intefacer;
var resource_list;
var sprites = {
"frames": {
    "none":{
        "frame": {"x":0,"y":0,"w":50,"h":50},
    },
    "sun_panel":{
        "frame": {"x":50,"y":0,"w":50,"h":50},
    },
    "main":{
        "frame": {"x":100,"y":0,"w":50,"h":50},
    },
    "wind_energy":{
        "frame": {"x":150,"y":0,"w":50,"h":50},
    },
    "wire":{
        "frame": {"x":200,"y":0,"w":50,"h":50},
    },
    "oil":{
        "frame": {"x":250,"y":0,"w":50,"h":50},
    },
},
};

var wanted_obj = 0;
var map_int = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
var map2_int = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

var tick_tm = 1000;
var money = 0;
var resource = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var resource_name = ['log', 'Stone', 'Boards', 'Charcoal', 'Coal', 'Iron Ore', 'Iron', 'Steel', 'Energy', 'Sand', 'Glass', 'Water', 'Concrete', 'Crude oil', 'Plastic']


function update_text() {
    console.log("a");
    resource_list.text = "";
    for (let i = 0; i < resource_name.length; ++i) {
        resource_list.text += resource_name[i] + ": " + resource[i] + "\n"; 
    }
}

const Button_def = {
    x: 0,
    y: 0,
    w: 10,
    h: 10,
    padding: 10,
    type: 0, // 0 - non, 1 - text, 2 - img, 3 - frame
    content: null,
    scene: null,
    callback: null
}
class Button {
    constructor(option) {
        let scene = option.scene || Button_def.scene;
        var button = null;
        if (!scene) return null;
        let x = option.x || Button_def.x;
        let y = option.y || Button_def.y;
        let type = option.type || Button_def.type;
        let callback = option.callback || Button_def.callback;
        if (type == 0){
            let w = option.w || Button_def.w;
            let h = option.h || Button_def.h;
            button = new Phaser.GameObjects.Rectangle(scene, x, y, w, h, 0x444444)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.fillColor = 0xf39c12)
            .on('pointerout', () => button.fillColor = 0x444444);
        }
        else {
            let content = option.content || Button_def.content;
            if (type == 1){
                let padding = option.padding || Button_def.padding;
                button = scene.add.text(x, y, content)
                .setOrigin(0.5)
                .setPadding(padding)
                .setStyle({ backgroundColor: '#111' })
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => callback())
                .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
                .on('pointerout', () => button.setStyle({ fill: '#FFF' }));
                if(option.w){
                    button.displayWidth = option.w;
                }
            } else 
            if (type == 2){
                button = scene.add.container();
                let w = option.w || Button_def.w;
                let h = option.h || Button_def.h;
                let button1 = new Phaser.GameObjects.Rectangle(scene, x, y, w, h, 0x444444)
                .setOrigin(0.5)
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => callback())
                .on('pointerover', () => button1.fillColor = 0xf39c12)
                .on('pointerout', () => button1.fillColor = 0x444444);
                let button2 = scene.add.image(x, y, content)
                .setOrigin(0.5);
                button.add(button1);
                button.add(button2);
            } else
            if (type == 3){
                button = scene.add.container();
                let w = option.w || Button_def.w;
                let h = option.h || Button_def.h;
                let button1 = new Phaser.GameObjects.Rectangle(scene, x, y, w, h, 0x444444)
                .setOrigin(0.5)
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => callback())
                .on('pointerover', () => button1.fillColor = 0xf39c12)
                .on('pointerout', () => button1.fillColor = 0x444444);
                let button2 = scene.add.image(x, y, content.texture, content.frame)
                .setOrigin(0.5);
                button.add(button1);
                button.add(button2);
            } 
        }
        return button;
    }
}

export class UI_scene extends Phaser.Scene {

    constructor () {
        super();
        Phaser.Scene.call(this, { key: 'UI_scene', active: true });
    }

    preload () {
        this.load.image('logo', 'assets/logo.png');
    } 

    create () {

        intefacer = this.add.container();
        intefacer.x = 655;
        intefacer.y = 250;
        let int_rect = new Phaser.GameObjects.Rectangle(this, 0, 0, 310, 500, 0x333333, 10);
        intefacer.add(int_rect);
        var frames = this.textures.get('tiles2').getFrameNames();

        resource_list = this.add.text(-140, -240, "a");
        intefacer.add(resource_list);

        for (let i = 0; i < 10; ++i) {
            let btn = new Button({x: (i%5)*60-125, y: Math.floor(i/5)*60+60, type: 3, content: {texture: 'tiles2', frame: frames[i+1]}, w: 50, h: 50, scene: this, callback: () => { 
                wanted_obj = i+1;
            }})
            intefacer.add(btn);
        }
    }
}

export class Game_scene extends Phaser.Scene {

    constructor () {
        super();
        Phaser.Scene.call(this, { key: 'Game_scene', active: true });
    }

    preload () {
        this.load.image('tiles', 'assets/tile.png');
        this.load.atlas('tiles2', 'assets/tile2.png', sprites);
    }

    create () {

        var cam = this.cameras.main;
        cam.setZoom(1);

        map = this.make.tilemap({ tileWidth: 50, tileHeight: 50, width: 25, height: 20});
        map2 = this.make.tilemap({ tileWidth: 50, tileHeight: 50, width: 25, height: 20});
        var tiles = map.addTilesetImage('tiles');
        var tiles2 = map.addTilesetImage('tiles2');

        var layer = map.createBlankLayer('layer1', tiles);
        var layer2 = map2.createBlankLayer('layer2', tiles2);

        layer.fill(0, 0, 0, 25, 20);


        marker = this.add.graphics();
        marker.lineStyle(2, 0x000000, 1);
        marker.strokeRect(0, 0, map.tileWidth * layer.scaleX, map.tileHeight * layer.scaleY);
    
        last_tm = (new Date).getTime();

        this.input.on('pointerdown', function (pointer) {

            mouse_last_x = pointer.x;
            mouse_last_y = pointer.y;
        }, this);
    
        this.input.on('pointerup', function (pointer) {
            if (pointer.x < 500){
                if (Math.abs(pointer.x-mouse_last_x) < 3 && Math.abs(pointer.y-mouse_last_y) < 3){
                    tilemx = map.worldToTileX(marker.x);
                    tilemy = map.worldToTileY(marker.y);
                    map2.putTileAt(wanted_obj, tilemx, tilemy);
                }
            }
        }, this);
        
        /*
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            
        });*/

        this.input.on('pointermove', function (pointer) {
    
            if (pointer.isDown){
                cam.scrollX -= (pointer.x - pointer.prevPosition.x) / cam.zoom;
                cam.scrollY -= (pointer.y - pointer.prevPosition.y) / cam.zoom;
            }
        }, this);

        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {
            if (deltaY > 0) {
                var newZoom = cam.zoom -.1;
                if (newZoom > 0.3) {
                cam.zoom = newZoom;     
                }
            }
            if (deltaY < 0) {
                var newZoom = cam.zoom +.1;
                if (newZoom < 1.3) {
                    cam.zoom = newZoom;     
                }
            }
        });
    }

    update () {
    
        if((new Date).getTime() > last_tm+tick_tm){
            last_tm += tick_tm;
            update_text();
        }
        var worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

        var pointerTileX = map.worldToTileX(worldPoint.x);
        var pointerTileY = map.worldToTileY(worldPoint.y);

        marker.x = map.tileToWorldX(pointerTileX);
        marker.y = map.tileToWorldY(pointerTileY);

    }
}
