import {Shape} from "./Shape";

export class Circle extends Shape {
    constructor(options) {
        super(options);
        this._x = options.x;
        this._y = options.y;
        this._color = options.color;
        this._radios = options.radios;

    }

    circleDraw = () => {
        const ctx = document.querySelector('canvas')
            .getContext('2d')
        if (ctx) {
            ctx.beginPath()
            ctx.moveTo(this._x, this._y);
            ctx.arc(this._x, this._y, this._radios, 0, Math.PI * 2, false)
            ctx.fillStyle = this._color;
            ctx.closePath()
            ctx.fill()
        }
    }
}

