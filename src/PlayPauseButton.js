/**
 * Created by TylerLiu on 2018/12/24.
 */
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Octicon, {primitiveSquare, triangleRight} from 'octicons-react'

export default class Controller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: true
        }
    }

    render() {
        if (this.state.playing)
            return(
                <Button variant='outline-dark' onClick={this.onClick.bind(this)}>
                    <Octicon icon={primitiveSquare} scale='1.5'/> Stop
                </Button>
            )
        else return(
            <Button variant='outline-dark' onClick={this.onClick.bind(this)}>
                <Octicon icon={triangleRight} scale='1.5'/> Play
            </Button>
        )
    }

    componentDidMount() {
        this.button = this.refs.button;
        window.addEventListener('resize', ()=>this.setState({}))
    }

    onClick() {
        this.props.onClick(!this.state.playing);
        this.setState({playing: !this.state.playing});
        return false;
    }


}