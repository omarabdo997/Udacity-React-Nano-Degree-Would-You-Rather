import React, { Component } from 'react'
import Question from './Question'
import {connect} from 'react-redux'
class Home extends Component {
    state = {
        questions: 'unansweredQuestions'
    }
    switchToAnswered = (e) => {
        if (this.state.questions === 'answeredQuestions') return
        this.setState({
            questions: 'answeredQuestions'
        })
    }
    switchToUnanswered = (e) => {
        if (this.state.questions === 'unansweredQuestions') return
        this.setState({
            questions: 'unansweredQuestions'
        })
    }
    render() {
        const type = this.state.questions
        const {questions} = this.props
        return (
            <div className="all-questions-container">
                <div className="questions-category-left">
                    <h3 onClick={this.switchToUnanswered}>Unanswered Questions</h3>
                </div>
                <div className="questions-category-right">
                    <h3 onClick={this.switchToAnswered}>Answered Questions</h3>
                </div>
                {Object.keys(questions[type]).map((key) => {
                    return (
                        <Question key={key} question={questions[type][key]}/>
                        
                    )
                })}
            </div>
        )
    }
}
const stateToProps = ({questions}) => ({
    questions
})
export default connect (stateToProps)(Home);