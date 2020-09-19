import React from 'react'
import LeaderBoardItem from './LeaderBoardItem'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'


function LeaderBoard(props) {
    const {users, authedUser} = props
    return !authedUser?<Redirect to={{
        pathname:'/signin',
        state: {from:'/leaderboard'}
    }}/>:
    <div className="leader-board-container">
        {users.map((user) => (
            <LeaderBoardItem user={user} key={user}/>
        ))}
    </div>
    
}

const stateToProps = ({users, authedUser}) => ({
    users: Object.keys(users).sort((a,b) => (
        users[b].score -users[a].score
    )),
    authedUser
})
export default connect (stateToProps)(LeaderBoard)