import React, {Component} from 'react'
import logo from '../wouldyourather4.jpg'
import UserDropBox from './UserDropBox'
import {authUser} from '../actions/authedUser'
import {Link} from 'react-router-dom'
import {handleRecieveQuestions} from '../actions/questions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import authedUser from '../reducers/authedUser'

class SignIn extends Component {
    state = {
        selectedUser: null
    }
    selectUser = (user) => {
        this.setState((currentState) => ({
            selectedUser: user
        }))
    }
    handleClick = (e) => {
        this.props.dispatch(authUser(this.state.selectedUser))
        this.props.dispatch(handleRecieveQuestions())
    }
    render() {
        return (
            <div className="signin-container">
                <img className="logo" src={logo} alt="not found"/>
                <UserDropBox 
                    selectUser={this.selectUser} 
                    selectedUser={this.state.selectedUser}
                />
                <a>Don't have an account? Sign Up Now!</a>
                <button 
                    className="signin-button" 
                    disabled={this.state.selectedUser?false:true} 
                    onClick={this.handleClick}
                >
                Sign in
                </button>
                {/* <Link onClick={this.handleClick} className='signin-button link' to='/'>Sign in</Link> */}
            </div>
        )
    }
}
export default connect ()(SignIn);