import React from 'react'
import Slider from '@material-ui/core/Slider'

export class SliderComponent extends React.Component {
    render() {
        return(
            <div>
                <Slider 
                    onChange={(_,val) => {
                        this.props.onSliderChange(val)
                    }}
                    defaultValue={this.props.defaultValue}
                    aria-labelledby="discrete-slider-small-steps"
                    step={this.props.step}
                    min={this.props.min}
                    max={this.props.max}
                    valueLabelDisplay="auto" 
                />
            </div>
        )
    }
}