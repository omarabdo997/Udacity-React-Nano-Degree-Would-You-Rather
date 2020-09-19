import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions'
import {withRouter} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import authedUser from '../reducers/authedUser'

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
            author: this.props.authedUser
        }
        this.props.dispatch(handleAddQuestion(question, this.props.authedUser))
        this.props.history.push('/')
        console.log(this.props)


    }

    render() {
        const {firstOption, secondOption} = this.state
        const {authedUser} = this.props
        return !authedUser?<Redirect to={{
            pathname:'/signin',
            state: {from:'/add'}
        }}/>:
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
        
    }
}

const stateToProps = ({authedUser}) => ({
    authedUser
})
export default withRouter(connect (stateToProps)(NewQuestion))