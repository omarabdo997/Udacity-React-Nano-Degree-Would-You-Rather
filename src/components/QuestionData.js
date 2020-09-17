import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from '../actions/questions'
import { handleRecieveUsers } from '../actions/users'

class QuestionData extends Component {
    handleClickLeft = () => {
        this.props.dispatch(handleAnswerQuestion(
            this.props.question.id,
            this.props.authedUser,
            'optionOne'
        ))
    }
    handleClickRight = () => {
        this.props.dispatch(handleAnswerQuestion(
            this.props.question.id,
            this.props.authedUser,
            'optionTwo'
        ))
    }
    render() {
        const {question, authedUser} = this.props
        console.log('rerender')
        const voted = question.optionOne.votes.includes(authedUser) || 
            question.optionTwo.votes.includes(authedUser)
        let percentageOne, percentageTwo, optionOneVotes, optionTwoVotes
        if (voted) {
            optionOneVotes = question.optionOne.votes.length
            optionTwoVotes = question.optionTwo.votes.length
            percentageOne = ((optionOneVotes)/(optionOneVotes + optionTwoVotes))*100
            percentageTwo = ((optionTwoVotes)/(optionOneVotes + optionTwoVotes))*100
        }
        console.log(voted)
        return (
            <div className="new-question">
                <h1>Would you rather</h1>
                
                    {voted?
                        <div className="text-areas"> 
                            <div className="red-text-area selected">
                                {question.optionOne.votes.includes(authedUser)?
                                    <span className="check">&#10004;</span>:null
                                }
                                <p className="percentage-vote">{percentageOne}%</p>
                                <p className="number-vote">{optionOneVotes} votes</p>
                                <p className="vote-choice">{question.optionOne.text}</p>
                            </div>
                            <div className="blue-text-area selected">
                                {question.optionTwo.votes.includes(authedUser)?
                                    <span className="check">&#10004;</span>:null
                                }
                                <p className="percentage-vote">{percentageTwo}%</p> 
                                <p className="number-vote">{optionTwoVotes} votes</p>
                                <p className="vote-choice">{question.optionTwo.text}</p>
                            </div>
                        </div> 
                        :<div className="text-areas"> 
                            <div className="red-text-area" onClick={this.handleClickLeft}>
                                <p className="percentage-vote">&nbsp;</p>
                                <p className="vote-choice">{question.optionOne.text}</p>
                            </div>
                            <div className="blue-text-area" onClick={this.handleClickRight}>
                                <p className="percentage-vote">&nbsp;</p> 
                                <p className="vote-choice">{question.optionTwo.text}</p>
                            </div>
                        </div> 
                    }
                    
                
            </div>
        )
    }
}
const stateToProps = ({questions, authedUser}, props) => {
    const id = props.match.params.question_id
    const allQuestions = {...questions.answeredQuestions, ...questions.unansweredQuestions}
    return {
        question: allQuestions[id],
        authedUser: authedUser.id,
        questions,
    }
}
export default connect(stateToProps)(QuestionData);