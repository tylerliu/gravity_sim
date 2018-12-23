import React, { Component } from 'react';
import Field from './Field.js'

class Stage extends Component {

    constructor() {
        super();
        this.ctx = null;
        this.path_ctx = null;
        this.field = new Field();
        this.isPathDrawing = true;
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        this.ctx = canvas.getContext("2d")
        this.field.addEntity(Math.pow(10, 5), 200, 200, 0, 0)
        this.field.addEntity(1000, 200, 400, 23, 0)
        this.field.addEntity(0, 200, 412, 33.5, 0)
        //TODO prepare next state after draw
        window.requestAnimationFrame(this.draw.bind(this));

        const path_canvas = this.refs.path_canvas
        this.path_ctx = path_canvas.getContext("2d")
    }

    render() {
        return(
            <div style={{height: "90vh", width: "100vw",position: "relative"}}>
                <canvas ref="path_canvas" width={window.innerWidth} height={window.innerHeight * 0.9} style={{position: "absolute", left: 0, top: 0, zIndex: 0, backgroundColor : 'black'}} />
                <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight * 0.9} style={{position: "absolute", left: 0, top: 0, zIndex: 1, backgroundColor : 'transparent'}}/>
            </div>
        )
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.field.draw(this.ctx);
        if (this.isPathDrawing) this.field.draw_path(this.path_ctx);
        window.requestAnimationFrame(this.draw.bind(this));
    }

    clearPath() {
        this.isPathDrawing = false;
        this.path_ctx.clearRect(0, 0, this.path_ctx.canvas.width, this.path_ctx.canvas.height);
    }

    startPath() {
        this.isPathDrawing = true;
    }
}
export default Stage