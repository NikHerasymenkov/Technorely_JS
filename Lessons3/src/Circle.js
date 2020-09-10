import {Shape} from "./Shape";

export class Circle extends Shape {
    constructor(options) {
        super(options);
        this._x = options.x;
        this._y = options.y;
        this._color = options.color;
        this._radios = options.radios;

    }
draw=()=>{
this._getContext()
        this.ctx.beginPath()
        this.ctx.moveTo(this._x, this._y);
        this.ctx.arc(this._x, this._y, this._radios, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this._color;
        this.ctx.closePath()
        this.ctx.fill()

}


}

