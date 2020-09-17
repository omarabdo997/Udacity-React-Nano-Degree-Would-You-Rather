import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {handleRecieveUsers} from '../actions/users'
import {withRouter} from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        firstOption: "",
        secondOption: ""
    }
    handleFirstChange = (e) => {
        const value = e.target.value
        this.setState({
            firstOption: value
        })
    }
    handleSecondChange = (e) => {
        const value = e.target.value
        this.setState({
            secondOption: value
        })
    }
    handleClick= (e) => {
        const optionOneText = this.state.firstOption
        const optionTwoText = this.state.secondOption
        const question = {
            optionOneText,
            optionTwoText,
            author: this.props.authedUser.id
        }
        this.props.dispatch(handleAddQuestion(question))
        this.props.dispatch(handleRecieveUsers())
        this.props.history.push('/')

    }
    render() {
        const {firstOption, secondOption} = this.state
        return (
            <div className="new-question">
                <h1>Would You Rather</h1>
                <div className="text-areas">
                    <textarea className="red-text-area" value={firstOption} onChange={this.handleFirstChange}/>
                    
                    
                    <textarea className="blue-text-area" value={secondOption} onChange={this.handleSecondChange}/>
                </div>
                <button 
                    className="signin-button" 
                    disabled={
                        firstOption && secondOption ? false:true
                    }
                    onClick={this.handleClick}
                >Submit</button>
                
            </div>
        )
    }
}
const stateToProps = ({authedUser}) => ({
    authedUser
})
export default withRouter(connect (stateToProps)(NewQuestion))