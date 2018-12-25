/**
 * Created by TylerLiu on 2018/12/21.
 */
import Entity from './Entity.js'

let NUM_ENLER = 100;
let FRAME_SEC = 1 / 30;

export default class Field {
    constructor() {
        this.Entities = []
    }

    addEntity(mass, position_x, position_y, velocity_x, velocity_y) {
        this.Entities.push(new Entity(mass, position_x, position_y, velocity_x, velocity_y))
    }

    //update field to next frame
    update() {
        for (let _ = 0; _ < NUM_ENLER; _ ++) {
            //acceleration
            let acc_x = new Array(this.Entities.length)
            let acc_y = new Array(this.Entities.length)
            for (let i = 0; i < acc_x.length; i ++) {
                acc_x[i] = acc_y[i] = 0.0
            }

            for (let i = 0; i < this.Entities.length; i ++)
                for (let j = i + 1; j < this.Entities.length; j ++) {
                    let dx = 1.0 * this.Entities[i].position_x - this.Entities[j].position_x;
                    let dy = 1.0 * this.Entities[i].position_y - this.Entities[j].position_y;
                    let r_2 = dx * dx + dy * dy;
                    let acc_m = this.Entities[j].mass / r_2
                    acc_x[i] += acc_m * (this.Entities[j].position_x - this.Entities[i].position_x) / Math.sqrt(r_2)
                    acc_y[i] += acc_m * (this.Entities[j].position_y - this.Entities[i].position_y) / Math.sqrt(r_2)
                    acc_m = this.Entities[i].mass / r_2
                    acc_x[j] += acc_m * (this.Entities[i].position_x - this.Entities[j].position_x) / Math.sqrt(r_2)
                    acc_y[j] += acc_m * (this.Entities[i].position_y - this.Entities[j].position_y) / Math.sqrt(r_2)
                }

            for (let i = 0; i < this.Entities.length; i ++) {

                //multiplier
                acc_x[i] *= 1.0
                acc_y[i] *= 1.0

                //update velocity
                this.Entities[i].velocity_x += acc_x[i] * FRAME_SEC / NUM_ENLER
                this.Entities[i].velocity_y += acc_y[i] * FRAME_SEC / NUM_ENLER

                //update position
                this.Entities[i].position_x += this.Entities[i].velocity_x * FRAME_SEC / NUM_ENLER
                this.Entities[i].position_y += this.Entities[i].velocity_y * FRAME_SEC / NUM_ENLER
            }

            //collision detection
            for (let i = 0; i < this.Entities.length; i ++)
                for (let j = i + 1; j < this.Entities.length; j ++) {
                    let r_2 = Math.pow(this.Entities[i].position_x - this.Entities[j].position_x, 2) +
                        Math.pow(this.Entities[i].position_y - this.Entities[j].position_y, 2)
                    if (Math.sqrt(r_2) <= this.Entities[i].radius + this.Entities[j].radius) { //collided
                        this.Entities[i].position_x = (this.Entities[i].position_x * this.Entities[i].mass + this.Entities[j].position_x * this.Entities[j].mass) / (this.Entities[i].mass + this.Entities[j].mass)
                        this.Entities[i].position_y = (this.Entities[i].position_y * this.Entities[i].mass + this.Entities[j].position_y * this.Entities[j].mass) / (this.Entities[i].mass + this.Entities[j].mass)
                        this.Entities[i].velocity_x = (this.Entities[i].velocity_x * this.Entities[i].mass + this.Entities[j].velocity_x * this.Entities[j].mass) / (this.Entities[i].mass + this.Entities[j].mass)
                        this.Entities[i].velocity_y = (this.Entities[i].velocity_y * this.Entities[i].mass + this.Entities[j].velocity_y * this.Entities[j].mass) / (this.Entities[i].mass + this.Entities[j].mass)
                        this.Entities[i].mass += this.Entities[j].mass

                        //delete j
                        this.Entities.splice(j, 1)
                        j --

                    }
                }
        }
    }

    draw(ctx, isPlaying) {
        this.Entities.forEach((e) => e.draw(ctx))
        if (isPlaying) this.update()
    }

    draw_path(ctx) {
        this.Entities.forEach((e) => {
            ctx.beginPath();
            ctx.arc(e.position_x, e.position_y, 1, 0, 2 * Math.PI, false);
            ctx.fillStyle = e.color;
            ctx.fill();
            ctx.lineWidth = 0;
            ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
            ctx.stroke();
        })
    }

    clear() {
        this.Entities = []
    }
}