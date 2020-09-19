import React, {Component} from 'react'
import {Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import noImage from '../no-image.jpg'


class Question extends Component {

    handleClick = () => {
        this.props.history.push('/questions/' + this.props.question.id)
    }

    render() {
        const {users, question} = this.props
        const user = users[question.author]
        const optionOneLength = question.optionOne.text.length
        const optionTwoLength = question.optionTwo.text.length
        let optionOne = question.optionOne.text.slice(0,20);
        let optionTwo = question.optionTwo.text.slice(0,20);
        optionOne = optionOneLength>20?optionOne+"...":optionOne
        optionTwo = optionTwoLength>20?optionTwo+"...":optionTwo
        return (
            <Fragment>
                <hr/>
                <div className="question" onClick={this.handleClick}>
                    
                    <div className="user-data">
                    <img src={user.avatarURL?user.avatarURL:noImage} alt="avatar"/>
                    <p className="name">{user.name.split(' ')[0]}</p>
                    </div>
                    
                    <div className="question-brief">
                        <h3>Would You Rather?</h3>
                        <div className='rather-choices'>
                            <p className='red'>{optionOne}</p>
                            <p className='blue'>{optionTwo}</p>
                        </div>
                        
                    </div>

                </div>
            </Fragment>
            
        )
    }
}

const stateToProps = ({users, questions}, {id, type}) => {
    return {users,
    question: questions[type][id]}
}
export default withRouter(connect (stateToProps)(Question))