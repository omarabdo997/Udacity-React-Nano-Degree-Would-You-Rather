import React, {Component} from 'react'

class Question extends Component {
    render() {
        return (
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
        )
    }
}
export default Question;