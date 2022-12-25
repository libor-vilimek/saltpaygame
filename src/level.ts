import * as ex from 'excalibur';
import {Bot} from './bot';
import * as wall from './wall';

export class Level extends ex.Scene {
    constructor() {
        super();
    }

    onInitialize(engine: ex.Engine) {

        // Create collision groups for the game
        ex.CollisionGroupManager.create("player");
        ex.CollisionGroupManager.create("wall");

        // Compose actors in scene
        const actor = new Bot(500, 500);
        createWalls(0,0, 20,1).forEach(item => engine.add(item));
        createWalls(0,0, 1,20).forEach(item => engine.add(item));


        engine.add(actor);

        this.camera.clearAllStrategies();
        this.camera.strategy.elasticToActor(actor, 0.05, 0.1);
    }

}

function createWalls(x: number, y: number, width:number, height:number): Array<wall.Wall>{
    const walls = [];

    for (let i=0; i < width; i++) {
        for (let j=0; j < height; j++) {
            walls.push(new wall.Wall(x + i*wall.width, y + j*wall.height));
        }
    }

    return walls;
}
