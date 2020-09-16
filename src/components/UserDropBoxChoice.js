import React, {Component} from 'react'
import noImage from '../no-image.jpg'

class UserDropBoxChoice extends Component {
    handleClick = (e) => {
        this.props.selectUser(this.props.user)
        this.props.dropBox()
    }
    render () {
        const {user, chosen} = this.props
        if(!chosen) {
            return (
                <div className="user-choice"  onClick={this.handleClick}>
                    <img src={user.avatarURL}/>
                    <p>{user.id}</p>
                </div>
            )
        } else {
            return (
                <div className="user-selected">
                    <img src={user?user.avatarURL:noImage}/>
                    <p>{user?user.id:"please select a user..."}</p>
                </div>
            )
        }
        
    }
}
export default UserDropBoxChoice;