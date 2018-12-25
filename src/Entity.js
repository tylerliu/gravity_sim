/**
 * Created by TylerLiu on 2018/12/21.
 */

export default class Entity {

    constructor(mass, position_x, position_y, velocity_x, velocity_y) {
        this.mass = mass;
        this.velocity_x = velocity_x;
        this.velocity_y = velocity_y;
        this.position_x = position_x;
        this.position_y = position_y;
    }

    static getColor(mass) {
        //0 mass is white
        if (mass === 0 || mass <= 0.000001) return '#FFFFFF'
        let lo = Math.log2(mass)
        return 'hsl(' + ((lo * 10) | 0) + ', 100%, 50%)'
    }

    get color() {
        return Entity.getColor(this.mass)
    }


    get radius() {
        if (this.mass === 0 || this.mass <= 0.000001) return 2;
        let lo = Math.log2(this.mass) * 0.75;
        return lo + 2;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position_x, this.position_y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 0;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
        ctx.stroke();
    }

    static drawExample(ctx, mass, x, y) {
        let e = new Entity(mass, x, y, 0, 0)
        e.draw(ctx)
    }
}