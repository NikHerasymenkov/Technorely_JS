export class Shape {
    constructor(options) {
        this._x = options.x;
        this._y = options.y;
        this._height = options.height;
        this._width = options.width;
        this._color = options.color;
        this._createCanvas()
    }

    _createCanvas = () => {
        const createCanvas = document.createElement('canvas')
        document.body.appendChild(createCanvas)


    }
    _getContext = () => {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        return this.ctx
    }


    draw = () => {
this._getContext()
        this.ctx.rect(this._x, this._y, this._width, this._height, this._color);
        this.ctx.fillStyle = this._color;
        this.ctx.fill();
    }

}

