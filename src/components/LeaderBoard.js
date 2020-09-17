import React, {Component} from 'react'
import LeaderBoardItem from './LeaderBoardItem'
import {connect} from 'react-redux'

class LeaderBoard extends Component {

    render() {
        const {users} = this.props
        return (
            <div className="leader-board-container">
                {users.map((user) => (
                    <LeaderBoardItem user={user}/>
                ))}
            </div>
        )
    }
}
const stateToProps = ({users}) => ({
    users: Object.keys(users).sort((a,b) => (
        users[b].score -users[a].score
    ))
})
export default connect (stateToProps)(LeaderBoard)