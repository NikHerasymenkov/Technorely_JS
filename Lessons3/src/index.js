import {Shape} from "./Shape";
import {Triangle} from "./Triangle";
import {Square} from "./Square";
import {Circle} from "./Circle";

const shape = new Shape({
    x: 0,
    y: 0,
    width: 210,
    height: 200,
    color: 'black'
})
const circle = new Circle({
    x: 100,
    y: 70,
    radios: 30,
    color: 'green'
})
const triangle = new Triangle({
    x: 100,
    y: 210,
    color: 'red'
})
const square = new Square({
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    color: 'blue'
})
shape.draw()
circle.circleDraw()
triangle.triangleDraw()
square.squareDraw()
