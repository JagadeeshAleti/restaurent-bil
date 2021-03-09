import React from 'react'
import { SliderComponent } from '../SliderComponent/SliderComponent'
import "./style.css"

export class Bill extends React.Component {
    state = {
        total: 0
    }
    disaplyBill = (event) => {
        this.setState({total:event.target.value})
    }
    
    render() {
        return (
            <div class='bill'>
                <h1>Quick Tip</h1>    
                <div class='count-bill'>
                    <p> Bill <input onChange={this.disaplyBill} placeholder='Your Bill'/> </p>
                    
                    <br></br>

                    <div class='select-tip'>
                        <p>Select Tip </p>
                        <SliderComponent defaultValue={0} step={10} max={100}/>
                    </div>
                    
                    <br></br>
                    
                    <div class='tip'>
                        <p>Tip</p>
                        <span id='tip-bill'></span>
                    </div>
                    
                    <br></br> <hr></hr> 
                    
                    <div class='total'>
                        <p>Total</p>
                        <span id='total-bill'>{this.state.total}</span>
                    </div>
                    
                </div>
 
                <div class='split-bill'>
                    <div class='share-bill'>
                        <p>Split</p>
                        <SliderComponent defaultValue={1} step={1} max={10}/>
                    </div>
                    <br></br>
                    
                    <div class='s-bill'>
                        <p>Bill each</p>
                        <span id='each-bill'></span>
                    </div>
                    
                    <br></br>
                    
                    <div class='s-tip'>
                        <p>Split each</p>
                        <span id='each-tip'></span>
                    </div>
                </div>            
            </div>
        )
    }
}