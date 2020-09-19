import React, {Component} from 'react'
import UserDropBoxChoice from './UserDropBoxChoice'
import {connect} from 'react-redux'


class UserDropBox extends Component {
    state = {
        showHide: 'user-drop-options-hidden ',
        revolve: ''
    }
    dropBox = () => {
        this.setState((currentState)=> {
            let className;
            let revolve;
            if (currentState.showHide.includes('show')){
                className = currentState.showHide.replace('show','')
                revolve = ''
            }
            else {
                className = currentState.showHide+"show"
                revolve = 'revolve'
            }
            return {showHide: className, revolve}
        })
    }
    render() {
        const {users, selectedUser, selectUser} = this.props
        return (
            <div className="user-input">
                <p>User:</p>
                <div className="user-drop-area">
                    <UserDropBoxChoice chosen={true} user={users[selectedUser]}/>
                    <button className="arrow-button" onClick={this.dropBox}><span className={this.state.revolve}>&#10507;</span></button>
                    <div className={this.state.showHide}>
                        {Object.keys(users).map((key) => {
                            return <UserDropBoxChoice selectUser={selectUser} dropBox={this.dropBox} user={users[key]} key={key}/>
                        })}
                    </div>     
                </div>
                
            </div>
        )
    }
}
const stateToProps = ({users}, {selectUser, selectedUser}) => ({
    users,
    selectedUser,
    selectUser
})
export default connect (stateToProps)(UserDropBox)