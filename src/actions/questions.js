import {_saveQuestion, _getQuestions, _saveQuestionAnswer} from '../utils/_DATA'
import {setLoading} from './loading'

export const ADD_QUESTION = 'ADD_QUESTION'
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question
})
const recieveQuestions = (questions) => ({
    type: RECIEVE_QUESTIONS,
    questions
})
const answerQuestion = (qid, user, answer) => ({
    type: ANSWER_QUESTION,
    qid,
    user,
    answer
})

export const handleAddQuestion = (question) => {
    return (dispatch) => {
        dispatch(setLoading(true))
        _saveQuestion(question)
            .then((questionFormated) => {
                dispatch(addQuestion(questionFormated))
                dispatch(setLoading(false))
            })
    }
}
export const handleAnswerQuestion = (qid, user, answer) => {
    return(dispatch) => {
        // dispatch(setLoading(true))
        dispatch(answerQuestion(qid, user, answer))
        // dispatch(setLoading(false))
        // const data = {
        //     authedUser: user,
        //     qid,
        //     answer

        // }
        // _saveQuestionAnswer(data)
        //     .then(() => {
        //         console.log('done')
        //     })
    }
}
export const handleRecieveQuestions = () => {
    return (dispatch, getState) => {
        dispatch(setLoading(true))
        const {authedUser} = getState()
        _getQuestions()
            .then((questions) => {
                let answeredQuestions= {}
                let unansweredQuestions= {}
                for (let key in questions) {
                    if (key in authedUser.answers) {
                        answeredQuestions[key]=questions[key]
                    } else {
                        unansweredQuestions[key]=questions[key]
                    }
                }
                const formatedQuestions = {answeredQuestions, unansweredQuestions}
                dispatch(recieveQuestions(formatedQuestions)) 
                dispatch(setLoading(false))
            })
    }
}