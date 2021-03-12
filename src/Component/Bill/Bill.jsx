import React from 'react'
import { SliderComponent } from '../SliderComponent/SliderComponent'
import "./style.css"

export class Bill extends React.Component {
    state = {
        bill:0,
        tip: 0,
        total: 0,
        eachBill: 0,
        splitBill: 0,
        noOfPeople: 1,
        tipPercent: 0 
    }

    onBillChange = (event) => {
        var totalBill = parseInt(event.target.value) + parseInt(this.state.tip)
        const tip = (parseInt(event.target.value)/100)*parseInt(this.state.tipPercent);
        this.setState({
            tip: tip,
            bill: parseInt(event.target.value), 
            total: totalBill,
            eachBill: totalBill/this.state.noOfPeople,
        })
    }

    onTipChange = (val) => {
        const tip= parseInt((this.state.bill/100)*val)
        const total = parseInt(this.state.bill+tip)
        this.setState({
            tip: tip,
            tipPercent: val,
            eachBill: total/this.state.noOfPeople,
            splitBill: tip/this.state.noOfPeople,
            total: total,
        })
    }

    onPeopleChange = (val) => {
        this.setState({
            eachBill: this.state.total/val,
            splitBill: this.state.tip/val  ,
            noOfPeople: val,          
        })
    }
    render() {
        return (
            <div class='bill'>
                <h1>Quick Tip</h1>    
                <div class='count-bill'>
                    <div class='main-bill'>
                        <p class='bil-input'> Bill</p>
                        <input type='number' onChange={this.onBillChange} placeholder='Your Bill'/>
                    </div>
                    <div class='select-tip'>
                        <p>Select Tip </p>
                        <SliderComponent onSliderChange={this.onTipChange} defaultValue={0} step={5} max={100}/>
                    </div>
                    <div class='tip'>
                        <p>Tip</p>
                        <span>{this.state.tip}</span>
                    </div>
                    <div class='total'>
                        <p>Total</p>
                        <span>{this.state.total}</span>
                    </div>
                </div>
 
                <div class='split-bill'>
                    <div class='share-bill'>
                        <p>Split</p>
                        <SliderComponent onSliderChange={this.onPeopleChange} defaultValue={1} step={1} max={10} min={1}/>
                    </div>                    
                    <div class='s-bill'>
                        <p>Bill each</p>
                        <span>{this.state.eachBill}</span>
                    </div>
                    <div class='s-tip'>
                        <p>Split each</p>
                        <span>{this.state.splitBill}</span>
                    </div>
                </div>            
            </div>
        )
    }
}