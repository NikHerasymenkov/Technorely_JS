import {Shape} from "./Shape";

export class Triangle extends Shape {

    constructor(options) {
        super(options);
        this._x = options.x;
        this._y = options.y;
        this._color = options.color;
    }

  draw = () => {
this._getContext()
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.fillStyle = this._color;
      this.ctx.moveTo(this._x / 2, this._y);
      this.ctx.lineTo(this._x * 2, this._y - 150);
      this.ctx.lineTo(this._x / 2, this._y * 6);
      this.ctx.fill();
      this.ctx.closePath()
        }
}
