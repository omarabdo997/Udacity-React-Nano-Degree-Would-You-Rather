import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleUnauthUser} from '../actions'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
 
class Nav extends Component {

    handleClick = () => {
        this.props.dispatch(handleUnauthUser())
    }

    render() {
        const {authedUser, users} = this.props
        const location = this.props.location.pathname
        const user = users[authedUser]
        return (
            <nav>
                <div className="nav-container">
                    <ul className="nav-options">
                        <Link className={'button link ' + (location==='/'?'button-selected':'')} to='/'>Home</Link>
                        <Link className={'button link ' + (location==='/add'?'button-selected':'')} to='/add'>New Question</Link>
                        <Link className={'button link ' + (location==='/leaderboard'?'button-selected':'')} to='/leaderboard'>Leader Board</Link>

                    </ul>
                    {authedUser?
                        <ul className="nav-user">
                            <li>Hello, {user.name.split(" ")[0]}</li>
                            <li><img src={user.avatarURL} alt=""/></li>
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

const stateToProps = ({authedUser, users}) => ({
    authedUser,
    users
})
export default withRouter(connect (stateToProps)(Nav))