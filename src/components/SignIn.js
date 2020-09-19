import React, {Component} from 'react'
import logo from '../wouldyourather4.jpg'
import UserDropBox from './UserDropBox'
import {handleAuthUser} from '../actions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


class SignIn extends Component {
    state = {
        selectedUser: null
    }
    selectUser = (userID) => {
        this.setState((currentState) => ({
            selectedUser: userID
        }))
    }
    handleClick = (e) => {
        this.props.dispatch(handleAuthUser(this.state.selectedUser))
        const history = this.props.history
        if(!this.props.location.state || 
            this.props.location.state.from === '/signin') history.push('/')
        else history.push(this.props.location.state.from)
    }
    render() {
        return (
            <div className="signin-container">
                <img className="logo" src={logo} alt="logo"/>
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
            </div>
        )
    }
}
export default withRouter(connect ()(SignIn));