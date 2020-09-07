export class Shape {
    constructor(options) {
        this.x = options.x;
        this.y = options.y;
        this.height = options.height;
        this.width = options.width;
        this.color = options.color;
    }

    draw = () => {
        const createCanvas = document.createElement('canvas')
        document.body.appendChild(createCanvas)
        const canvas = document.querySelector('canvas')
        canvas.style.height = '100%'
        canvas.style.width = '100%'
        const ctx = canvas.getContext("2d")
        if (ctx) {
            this.stageConfig = {
                height: innerHeight,
                width: innerWidth
            }
            ctx.clearRect(this.x, this.y, this.stageConfig.height, this.stageConfig.width)
            ctx.beginPath();
            ctx.rect(this.x,this.y,this.width,this.height,this.color);
            ctx.fillStyle =this.color;
            ctx.fill();
            ctx.closePath()

        }
    }
}

