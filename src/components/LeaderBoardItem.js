import React, {Component} from 'react'

class LeaderBoardItem extends Component {
    render() {
        return (
            <div className="leader-board-item">
                <div className="user-data">
                    <img src="https://tylermcginnis.com/would-you-rather/tyler.jpg" alt=""/>
                    <p className="name-l">Omar</p>
                </div>
                <div className="answered">
                    <p>Answered Questions: </p><span>50</span>
                    <p>UnAnswered Questions: </p><span>20</span>
                </div>
                <div className="score">
                    <p>&#9733;</p>
                    <span>7.6</span>
                </div>
            </div>
        )
    }
}
export default LeaderBoardItem;
// &#9733;