import React, { Component } from 'react'
import Question from './Question'
class Home extends Component {
    render() {
        return (
            <div className="all-questions-container">
                <div className="questions-category-left">
                    <h3>Unanswered Questions</h3>
                </div>
                <div className="questions-category-right">
                    <h3>Answered Questions</h3>
                </div>
                <hr/>
                <Question />
                <hr/>
                <Question />
                <hr/>
                <Question />
                <hr/>
                <Question />
                <hr/>
                <Question />
                <hr/>
                <Question />
                <hr/>
                <Question />
            </div>
        )
    }
}
export default Home;