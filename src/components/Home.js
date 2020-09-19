import React, { Component } from 'react'
import Question from './Question'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



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
        const {questions, authedUser} = this.props
        return !authedUser?<Redirect to={{
            pathname:'/signin',
            state: {from:'/'}
        }}/>:
        <div className="all-questions-container">
            <div 
                onClick={this.switchToUnanswered} 
                className={
                    'questions-category-left ' + 
                    (type==='unansweredQuestions'?"que-cat-left-select":'')
                }
            ><h3 >Unanswered Questions</h3>
            </div>
            <div 
                onClick={this.switchToAnswered} 
                className={
                    'questions-category-right ' + 
                    (type==='answeredQuestions'?"que-cat-right-select":'')
                }
            ><h3 >Answered Questions</h3>
            </div>
            {questions[type]?questions[type].map((question) => {
                return (
                    <Question key={question} id={question} type={type}/>
                    
                )
            }):null}
        </div>
        
    }
}
const stateToProps = ({questions, authedUser}) => ({
    questions:{
        unansweredQuestions: Object.keys(questions.unansweredQuestions).sort((a,b) => (
            questions.unansweredQuestions[b].timestamp - questions.unansweredQuestions[a].timestamp
        )), 
        answeredQuestions: Object.keys(questions.answeredQuestions).sort((a,b) => (
            questions.answeredQuestions[b].timestamp - questions.answeredQuestions[a].timestamp
        ))},
    authedUser
})
export default connect (stateToProps)(Home);