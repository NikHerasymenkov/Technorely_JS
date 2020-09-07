import {Shape} from "./Shape";

export class Square extends Shape {
    constructor(options) {
        super(options);
        this._x = options._x
        this._y = options._y
        this._color = options._color
    }

    squareDraw = () => {
        const ctx = document.querySelector('canvas')
            .getContext('2d')
        if (ctx) {
            ctx.beginPath()
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height, this.color)
            ctx.closePath()
            ctx.fill()
        }
    }
}
