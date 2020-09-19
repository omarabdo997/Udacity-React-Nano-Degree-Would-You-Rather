import React, {Component} from 'react'
import {Fragment} from 'react'
import {connect} from 'react-redux'

function LeaderBoardItem(props) {
    const {users, id} = props
    const user = users[id]
    return (
        <Fragment>
            <div className="leader-board-item">
                <div className="user-data">
                    <img src={user.avatarURL} alt=""/>
                    <p className="name-l">{user.name.split(" ")[0]}</p>
                </div>
                <div className="answered">
                    <p>Answered Questions: </p><span>{Object.keys(user.answers).length}</span>
                    <p>Asked Questions: </p><span>{user.questions.length}</span>
                </div>
                <div className="score">
                    <p>&#9733;</p>
                    <span>{user.score}</span>
                </div>
                
            </div>
            <hr/>
        </Fragment>
    )
}

const mapStateToProps = ({users}, {user}) => ({
    users,
    id:user
})
export default connect(mapStateToProps)(LeaderBoardItem);
