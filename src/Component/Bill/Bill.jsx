import React from 'react'
import "./style.css"

export class Bill extends React.Component {
    render() {
        return (
            <div class='bill'>
                <h1>Quick Tip</h1>    
                <div class='count-bill'>
                    <p>
                    Bill <input placeholder='Your Bill'/>
                    </p>
                    <br></br>
                    <p>Select Tip </p>
                    <br></br>
                    <p>Tip</p>
                    <br></br> <hr></hr> <br></br>
                    <p>Total</p>
                </div>
                <div class='split-bill'>
                    <p>Split</p>
                    <br></br>
                    <p>Bill each</p>
                    <br></br>
                    <p>Spit each</p>
                </div>            
            </div>
        )
    }
}