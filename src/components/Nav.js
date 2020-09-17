import React, {Component} from 'react'
import {connect} from 'react-redux'
import {unauthUser} from '../actions/authedUser'
import {Link} from 'react-router-dom'
 
class Nav extends Component {
    handleClick = () => {
        this.props.dispatch(unauthUser())
    }
    render() {
        const {authedUser} = this.props
        return (
            <nav>
                <div className="nav-container">
                    <ul className="nav-options">
                        <Link className='button link' to='/'>Home</Link>
                        <Link className='button link' to='/add'>New Question</Link>
                        <Link className='button link' to='/leaderboard'>Leader Board</Link>

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