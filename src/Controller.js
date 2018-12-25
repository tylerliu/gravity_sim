/**
 * Created by TylerLiu on 2018/12/23.
 */
import React, { Component } from 'react';
import PlayPauseButton from './PlayPauseButton'
import MassSlider from "./MassSlider";
import './Controller.css'

export default class Controller extends Component{

    constructor(props) {
        super(props)
        this.pathDrawing = false;
    }

    render() {
        return(
            <div className="controller">

                <PlayPauseButton onClick={this.changePlayState.bind(this)} style={{height: "10vh", width: "10vh", padding:5}}/>
                <MassSlider changeMass={this.changeMass.bind(this)}/>
                <button className="togglePath" ref="pathCheckBox" onClick={this.changePathDrawing.bind(this)}><strong>Path</strong></button>

                <div className="div2">
                    <label>Entities: {this.numEntities + "  "}</label>
                    <button className="clear" onClick={(e) => {this.props.stage.clear();
                        e.target.blur();}}><strong>CLEAR</strong></button>
                </div>
            </div>
        )

        //show number of particle
        //clear button
    }

    componentDidMount() {
        this.setState({});
    }

    changePlayState(new_state) {
        this.props.stage.isPlaying = new_state
    }

    changePathDrawing() {
        this.pathDrawing = !this.pathDrawing;
        if (this.pathDrawing)
            this.refs.pathCheckBox.className = "togglePath active";
        else this.refs.pathCheckBox.className = "togglePath";
        this.props.stage.drawingPath(this.pathDrawing);
        this.setState({});
        this.refs.pathCheckBox.blur();
    }

    changeMass(mass) {
        this.props.stage.selectedMass = mass;
    }

    updateEntity(num) {
        this.numEntities = num;
        this.setState({});
    }
}