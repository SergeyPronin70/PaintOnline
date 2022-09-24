import Tool from "./Tool";

export default class Line extends Tool {
    constructor(canvas) {
        super(canvas)
        this.listen()
    }
    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    mouseUpHandler(e) {
        this.mouseDown = false
        this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.lineTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }

    mouseMoveHandler(e) {
       
    }
    draw(x, y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()

    }
}