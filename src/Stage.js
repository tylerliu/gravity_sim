import React, { Component } from 'react';
import Field from './Field.js'
import Controller from "./Controller";

class Stage extends Component {

    constructor(props) {
        super(props);
        this.ctx = null;
        this.path_ctx = null;
        this.field = new Field();
        this.isPathDrawing = false;
        this.isPlaying = true;
        this.selectedMass = 1;
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
    }

    render() {
        return(
            <div style={{height: "100vh", width: "100vw", flex : 1}}>
                <div style={{height: "90vh", width: "100vw",position: "relative"}}>
                    <canvas ref="path_canvas" width={window.innerWidth} height={window.innerHeight * 0.9} style={{position: "absolute", left: 0, top: 0, zIndex: 0, backgroundColor : 'black'}} />
                    <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight * 0.9} style={{position: "absolute", left: 0, top: 0, zIndex: 1, backgroundColor : 'transparent'}}/>
                </div>
                <Controller main_stage={this} style={{height: "10vh", width: "100vw"}}/>
            </div>
        )
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.field.draw(this.ctx, this.isPlaying);
        if (this.isPlaying && this.isPathDrawing) this.field.draw_path(this.path_ctx);
        window.requestAnimationFrame(this.draw.bind(this));
    }

    drawingPath(value) {
        this.isPathDrawing = value;
        if (!value) this.path_ctx.clearRect(0, 0, this.path_ctx.canvas.width, this.path_ctx.canvas.height);
    }
}
export default Stage