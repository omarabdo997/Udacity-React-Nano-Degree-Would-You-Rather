import React, {Component} from 'react'
import {Fragment} from 'react'

class Question extends Component {
    render() {
        console.log("data", this.props.question)
        return (
            <Fragment>
                <hr/>
                <div className="question">
                    
                    <div className="user-data">
                    <img src="https://tylermcginnis.com/would-you-rather/tyler.jpg" alt=""/>
                    <p className="name">Omar</p>
                    </div>
                    
                    <div className="question-brief">
                        <h3>Would You Rather?</h3>
                        <div className='rather-choices'>
                            <p className='red'>Play basketball safjslkadfjlsajflksjafl...</p>
                            <p className='blue'>Play baseball safjlksadjflkasfj;ljslf...</p>
                        </div>
                        
                    </div>

                </div>
            </Fragment>
            
        )
    }
}
export default Question;