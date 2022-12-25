import * as ex from 'excalibur';
import * as resources from './resources';
import { ExcaliburGraphicsContext } from 'excalibur';
import { blockSprite } from './resources';

export const width = 40;
export const height = 40;

export class Wall extends ex.Actor {
    constructor(x: number, y: number) {
        super({
            name: 'Floor',
            pos: new ex.Vector(x, y),
            anchor: ex.Vector.Zero,
            width,
            height,
            collisionType: ex.CollisionType.Fixed,
            collisionGroup: ex.CollisionGroupManager.groupByName("wall"),
        });

        const image = resources.blockSprite.image;
        const sprite = new ex.Sprite({
            image: image,
            destSize: {
                // Optionally specify a different projected size, otherwise use the source
                width,
                height,
            },
        })

        this.graphics.use(sprite);
    }
}
