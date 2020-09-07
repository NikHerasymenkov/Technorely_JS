import {Shape} from "./Shape";

export class Triangle extends Shape {

    constructor(options) {
        super(options);
        this._x = options.x;
        this._y = options.y;
        this._color = options.color;
    }

    triangleDraw = () => {
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext("2d")
        if (ctx) {
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle = this._color;
            ctx.moveTo(this._x / 2, this._y);
            ctx.lineTo(this._x * 2, this._y - 150);
            ctx.lineTo(this._x / 2, this._y * 6);
            ctx.fill();
            ctx.closePath()
        }
    }
}
