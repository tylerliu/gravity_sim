/**
 * Created by TylerLiu on 2018/12/24.
 */

import React from 'react'
import './MassSlider.css'
import Entity from './Entity'

export default class MassSlider extends React.Component{
    constructor(props) {
        super(props)
        this.selectedMass = 1;
    }

    render() {
        return(
            <div style={{height: "10vh", width: "40vw", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <style ref="style"/>
                <input type="range" min="-1" max="10" defaultValue="0" step="any" className="slider"
                       ref="slider" onChange={this.changeMass.bind(this)}/>
                <label>Mass: {this.selectedMass.toPrecision(3)}</label>
            </div>
        )
    }

    toMass(value) {
        if (value < -0.4) {
            this.refs.slider.value = -1;
            return 0;
        }
        if (value < 0) {
            this.refs.slider.value = 0;
            return 1;
        }
        return Math.pow(10, value);

    }

    componentDidMount() {
        this.selectedMass = this.toMass(this.refs.slider.value);
        this.refs.style.sheet.insertRule('.slider::-webkit-slider-thumb {background: '+ Entity.getColor(this.selectedMass) + ';}', 0)
    }

    changeMass() {
        this.selectedMass = this.toMass(this.refs.slider.value);
        this.refs.style.sheet.deleteRule(0);
        this.refs.style.sheet.insertRule('.slider::-webkit-slider-thumb {background: '+ Entity.getColor(this.selectedMass) + ';}', 0)
        this.setState({});
        this.props.changeMass(this.selectedMass);
    }
}
