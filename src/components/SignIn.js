import React, {Component} from 'react'
import logo from '../wouldyourather4.jpg'
import UserDropBox from './UserDropBox'
import {authUser} from '../actions/authedUser'
import {connect} from 'react-redux'

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
                >Sign in</button>
            </div>
        )
    }
}
export default connect ()(SignIn);