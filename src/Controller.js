/**
 * Created by TylerLiu on 2018/12/23.
 */
import React, { Component } from 'react';
import PlayPauseButton from './PlayPauseButton'
import MassSlider from "./MassSlider";
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'


export default class Controller extends Component{

    constructor(props) {
        super(props)
        this.pathDrawing = false;
    }

    render() {
        return(
            <Navbar bg="light" fixed="bottom" className="d-flex justify-content-around" >
                <PlayPauseButton class="btn"onClick={this.changePlayState.bind(this)} style={{height: "10vh", width: "10vh", padding:5}}/>
                <MassSlider changeMass={this.changeMass.bind(this)}/>
                <Button variant="outline-info" ref="pathCheckBox" onClick={this.changePathDrawing.bind(this)}>Path</Button>

                <span>Entities: {this.numEntities + "  "}</span>
                <Button variant="outline-danger" onClick={(e) => {this.props.stage.clear();
                        e.target.blur();}}>Clear</Button>
            </Navbar>
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
        if (this.pathDrawing) {
            this.refs.pathCheckBox.variant = "info";
            this.refs.pathCheckBox.className = "btn btn-info";
        }
        else {
            this.refs.pathCheckBox.variant = "outline-info";
            this.refs.pathCheckBox.className = "btn btn-outline-info";
        }
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