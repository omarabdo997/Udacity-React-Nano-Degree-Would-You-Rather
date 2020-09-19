import {setLoading} from './loading'
import {authUser, unauthUser} from './authedUser'
import {recieveUsers, addUserQuestion, answerUserQuestion} from './users'
import {addQuestion} from './questions'
import {recieveQuestions, removeQuestions, answerQuestion} from './questions'
import {
    _getUsers, 
    _getQuestions, 
    _saveQuestion,
    _saveQuestionAnswer
} from '../utils/_DATA'


export function handleAuthUser (authedUser) {
    return (dispatch, getState) => {
        dispatch(authUser(authedUser))
        dispatch(setLoading(true))
        const {users} = getState()
        const user = users[authedUser]
        _getQuestions()
            .then((questions) => {
                dispatch(recieveQuestions(questions, user)) 
                dispatch(setLoading(false))
            })
    }
}

export function handleUnauthUser () {
    return (dispatch) => {
        
        dispatch(removeQuestions())
        dispatch(unauthUser())
    }
}

export const handleRecieveUsers = () => {
    return (dispatch) => {
        dispatch(setLoading(true))
        _getUsers()
            .then((users) => {
                dispatch(recieveUsers(users))
                dispatch(setLoading(false))
            })
    }
}

export const handleAddQuestion = (question, authedUser) => {
    return (dispatch) => {
        dispatch(setLoading(true))
        _saveQuestion(question)
            .then((questionFormated) => {
                dispatch(addQuestion(questionFormated))
                dispatch(addUserQuestion(authedUser, questionFormated))
                dispatch(setLoading(false))
            })
    }
}

export const handleAnswerQuestion = (qid, authedUser, answer) => {
    return(dispatch) => {
        
        dispatch(answerQuestion(qid, authedUser, answer))
        dispatch(answerUserQuestion(qid, authedUser, answer))
        _saveQuestionAnswer({qid, authedUser, answer})
            .then(() => {
                console.log('done')
            })
            .catch((mssg) => {
                alert(mssg)
                // this wont trigger but assum if the api returns a message in case
                // of failure
            })
    }
}
