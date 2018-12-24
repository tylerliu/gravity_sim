/**
 * Created by TylerLiu on 2018/12/24.
 */
import React, { Component } from 'react';
import pause_image from './pause_button.png'
import play_image from './play_button.png'

export default class Controller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: true
        }
    }

    render() {
        return(
            <input type="image" src={this.state.playing? pause_image : play_image} ref="button"
                   onClick={this.onClick.bind(this)}
                 height={Math.min(window.innerHeight, window.innerWidth) * 0.1}
                 width={Math.min(window.innerHeight, window.innerWidth) * 0.1}/>
        )
        //pause/play
        //mass and color slider
    }

    componentDidMount() {
        this.button = this.refs.button;
    }

    onClick() {
        this.props.onClick(!this.state.playing);
        this.setState({playing: !this.state.playing});
        return false;
    }
}