import React, {Component} from 'react'
import {connect} from 'react-redux'
import {unauthUser} from '../actions/authedUser'
 
class Nav extends Component {
    handleClick = () => {
        this.props.dispatch(unauthUser())
    }
    render() {
        const {authedUser} = this.props
        console.log(authedUser.id)
        return (
            <nav>
                <div className="nav-container">
                    <ul className="nav-options">
                        <li className="button">Home</li>
                        <li className="button">New Question</li>
                        <li className="button">Leader Board</li>
                    </ul>
                    {authedUser.id?
                        <ul className="nav-user">
                            <li>Hello, {authedUser.name.split(" ")[0]}</li>
                            <li><img src={authedUser.avatarURL} alt=""/></li>
                            <li className="button" onClick={this.handleClick}>Sign Out</li>
                            
                        </ul>
                        :<ul className="nav-user">
                            <li className="not-logged">Not Logged In!</li>
                            
                        </ul>
                    }
                    
                </div>
                
            </nav>
            
        )
    }
}
const stateToProps = ({authedUser}) => ({
    authedUser
})
export default connect (stateToProps)(Nav)