import React from 'react'
import Slider from '@material-ui/core/Slider'

export class SliderComponent extends React.Component {
    render() {
        return(
            <div>
                <Slider 
                    onChange={(event,val) => {
                        console.log(val)
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