import React, { Component } from 'react'

class NewQuestion extends Component {
    render() {
        return (
            <div className="new-question">
                <h1>Would You Rather</h1>
                <div className="text-areas">
                    <textarea className="red-text-area" />
                    
                    
                    <textarea className="blue-text-area"/>
                </div>
                <button className="signin-button">Submit</button>
                
            </div>
        )
    }
}
export default NewQuestion