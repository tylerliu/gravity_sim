/**
 * Created by TylerLiu on 2018/12/23.
 */
import React, { Component } from 'react';
import PlayPauseButton from './PlayPauseButton'

export default class Controller extends Component{

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div style={{display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "space-between"}}>
                <PlayPauseButton onClick={this.changePlayState.bind(this)} style={{height: "10vh", width: "10vh"}}/>
                <div>
                    <input type="checkbox" name="path_switch" ref="pathCheckBox" onClick={this.changePathDrawing.bind(this)}/>
                    <label>Path</label>
                </div>
            </div>
        )
        //pause/play
        //mass and color slider
    }

    componentDidMount() {

    }

    changePlayState(new_state) {
        this.props.main_stage.isPlaying = new_state
    }

    changePathDrawing() {
        this.props.main_stage.drawingPath(this.refs.pathCheckBox.checked);
    }
}