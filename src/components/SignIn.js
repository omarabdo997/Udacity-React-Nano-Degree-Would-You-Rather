import React, {Component} from 'react'
import logo from '../wouldyourather4.jpg'
class SignIn extends Component {
    render() {
        return (
            <div class="signin-container">
                <img src={logo} alt="not found"/>
                <div class="user-input">
                    <p>User:</p>
                    <input type='text' placeholder="select a user..." disabled/>
                    <button class="arrow-button">&#10507;</button>
                    
                </div>
                <a>Don't have an account? Sign Up Now!</a>
                <button class="signin-button">Sign in</button>
            </div>
        )
    }
}
export default SignIn