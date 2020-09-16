import React, {Component} from 'react'

class QuestionData extends Component {
    render() {
        return (
            <div className="new-question">
                <h1>Would you rather</h1>
                <div className="text-areas">
                    <div className="red-text-area">
                        <span className="check">&#10004;</span>
                        <p className="percentage-vote">50%</p>
                        <p className="number-vote">5 votes</p>
                        <p className="vote-choice">asdsalsakjdflkdsajflksdajflk;sdajflksjdafl;jlskdafjlksajflksajlkfjlkd sajflksdajfk lskdafjlsajfal;kjdfd</p>
                    </div>
                    <div className="blue-text-area">
                        <span className="check">&#10004;</span>
                        <p className="percentage-vote">50%</p> 
                        <p className="number-vote">5 votes</p>
                        <p>asdsadsalfjlsajfl;sjadfl;jsaflsajdfljsldkafjlksjdaflkjsalkjf lsjdflksajdflkjdsalkjflk sajflk jdsalkfj ldsaj flkdsaj flkdsaj flkaj flkadsj lkfdsajflkjsad fsdljf lksdajflkjsad lkfjlksadjflksajf lksa lkfsd flkdsja flk j dsalkf jdslkfjlksdaj flkdsajflkdsajflkdsaf lksad flkdsajflk dsajf lkdsajlfk dsaj f lkj</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuestionData;