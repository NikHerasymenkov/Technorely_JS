import {Shape} from "./Shape";

export class Square extends Shape {
    constructor(options) {
        super(options);
        this._x = options.x
        this._y = options.y
        this._color = options.color
    }

    draw = () => {
this._getContext()
        this.ctx.beginPath()
        this.ctx.fillStyle = this._color
        this.ctx.fillRect(this._x, this._y, this._width, this._height, this._color)
        this.ctx.closePath()
        this.ctx.fill()
}
}
