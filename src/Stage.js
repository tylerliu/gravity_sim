import React, { Component } from 'react'
import Field from './Field.js'
import Controller from "./Controller"
import Entity from './Entity'

class Stage extends Component {

    constructor(props) {
        super(props)
        this.ctx = null
        this.path_ctx = null
        this.field = new Field()
        this.isPathDrawing = false
        this.isPlaying = true
        this.selectedMass = 1
        this.mouseDown = false
    }

    render() {
        return(
            <div style={{position: "absolute", left: 0, top: 0}}>
                <div style={{height: window.innerHeight, width: window.innerWidth, position: "relative"}}>
                    <canvas ref="path_canvas" width={window.innerWidth} height={window.innerHeight} style={{position: "absolute", left: 0, top: 0, zIndex: 0, backgroundColor : 'black'}} />
                    <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight} style={{position: "absolute", left: 0, top: 0, zIndex: 1, backgroundColor : 'transparent'}}/>
                </div>
                <Controller ref="controller" stage={this} />
            </div>
        )
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        this.ctx = canvas.getContext("2d")
        this.field.addEntity(Math.pow(10, 5), 200, 200, 0, 0)
        this.field.addEntity(1000, 200, 300, 30, 0)
        this.field.addEntity(1000, 200, 100, -30, 0)
        this.field.addEntity(1000, 100, 200, 0, 30)
        this.field.addEntity(1000, 300, 200, 0, -30)
        //TODO prepare next state after draw
        window.requestAnimationFrame(this.draw.bind(this));

        const path_canvas = this.refs.path_canvas
        this.path_ctx = path_canvas.getContext("2d")
        window.addEventListener('resize', ()=>this.setState({}))
        this.refs.canvas.onmousedown = (e) => {
            this.mouseDown = true;
            this.currentMX = this.mouseDownX = e.offsetX;
            this.currentMY = this.mouseDownY = e.offsetY;
        }

        this.refs.canvas.onmousemove = (e) => {
            this.currentMX = e.offsetX;
            this.currentMY = e.offsetY;
        }

        this.refs.canvas.onmouseout = () => {
            this.mouseDown = false;
        }
        this.refs.canvas.onmouseup = (e) => {
            if (this.mouseDown === true)
                this.field.addEntity(this.selectedMass, this.mouseDownX, this.mouseDownY,
                //velocity
                (e.offsetX - this.mouseDownX)/2, (e.offsetY - this.mouseDownY)/2)
            this.mouseDown = false;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.field.draw(this.ctx, this.isPlaying);
        if (this.mouseDown) {
            Entity.drawExample(this.ctx, this.selectedMass, this.mouseDownX, this.mouseDownY)
            if (this.currentMX !== this.mouseDownX || this.currentMY !== this.mouseDownY) this.drawVelocity();
        }
        if (this.isPlaying && this.isPathDrawing) this.field.draw_path(this.path_ctx);
        window.requestAnimationFrame(this.draw.bind(this));
        this.refs.controller.updateEntity(this.field.Entities.length)
    }

    drawingPath(value) {
        this.isPathDrawing = value;
        if (!value) this.path_ctx.clearRect(0, 0, this.path_ctx.canvas.width, this.path_ctx.canvas.height);
    }

    drawVelocity() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = "white"
        this.ctx.moveTo(this.mouseDownX, this.mouseDownY)
        this.ctx.lineTo(this.currentMX, this.currentMY)
        this.ctx.stroke()

        this.ctx.font = "12px Arial"
        const dx = (this.currentMX - this.mouseDownX)/2
        const dy = (this.mouseDownY - this.currentMY)/2
        const XString = "Vx: " + dx.toPrecision(3)
        const YString = "Vy: " + dy.toPrecision(3)
        const MString = "Vy: " + Math.sqrt(dx * dx + dy * dy).toPrecision(3)

        let xOffset = 0
        if (this.currentMX < this.mouseDownX) xOffset -= this.ctx.measureText(XString + " ").width

        this.ctx.strokeText(XString, this.currentMX + xOffset, this.currentMY - 6)
        this.ctx.strokeText(YString, this.currentMX + xOffset, this.currentMY + 6)
        this.ctx.strokeText(MString, this.currentMX + xOffset, this.currentMY + 18)
    }

    clear() {
        this.field.clear();
        if (this.path_ctx !== null)
            this.path_ctx.clearRect(0, 0, this.path_ctx.canvas.width, this.path_ctx.canvas.height);
    }

}
export default Stage