import * as ex from 'excalibur';
import {botSpriteSheet, Resources} from './resources';

export class Bot extends ex.Actor {
    public onGround = true;
    public jumped = false;
    public hurt = false;
    public hurtTime: number = 0;

    constructor(x: number, y: number) {
        super({
            name: 'Bot',
            pos: new ex.Vector(x, y),
            collisionType: ex.CollisionType.Active,
            collisionGroup: ex.CollisionGroupManager.groupByName("player"),
            collider: ex.Shape.Box(32, 50, ex.Vector.Half, ex.vec(0, 3))
        });
    }


    // OnInitialize is called before the 1st actor update
    onInitialize(engine: ex.Engine) {
        // Initialize actor

        const idle = ex.Animation.fromSpriteSheet(botSpriteSheet, [2, 3], 800);
        idle.scale = new ex.Vector(2, 2);

        // Register animations with actor
        this.graphics.add("idle", idle);
    }

    // After main update, once per frame execute this code
    onPreUpdate(engine: ex.Engine, delta: number) {
        // Reset x velocity
        this.vel.x = 0;
        this.vel.y = 0;

        // Player input
        if (engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
            this.vel.x = -150;
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
            this.vel.x = 150;
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.Up)) {
            this.vel.y = -150;
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.Down)) {
            this.vel.y = 150;
        }

        this.graphics.use("idle")
    }
}
