import React, {Component} from 'react'
import LeaderBoardItem from './LeaderBoardItem'

class LeaderBoard extends Component {
    render() {
        return (
            <div className="leader-board-container">
                <LeaderBoardItem />
                <div className="clear"></div>
                <hr/>
                <LeaderBoardItem />
                <hr/>
                <LeaderBoardItem />
                <hr/>
                <LeaderBoardItem />
                <hr/>
                <LeaderBoardItem />
            </div>
        )
    }
}
export default LeaderBoard;