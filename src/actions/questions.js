import {_saveQuestion, _getQuestions} from '../utils/_DATA'

export const ADD_QUESTION = 'ADD_QUESTION'
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question
})
const recieveQuestions = (questions) => ({
    type: RECIEVE_QUESTIONS,
    questions
})

export const handleAddQuestion = (question) => {
    return (dispatch) => {
        _saveQuestion(question)
            .then((questionFormated) => {
                dispatch(addQuestion(questionFormated))
            })
    }
}
export const handleRecieveQuestions = () => {
    return (dispatch, getState) => {
        // const {authedUser} = getState()
        const authedUser = {
            id: 'sarahedo',
            name: 'Sarah Edo',
            avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
            answers: {
              "8xf0y6ziyjabvozdd253nd": 'optionOne',
              "6ni6ok3ym7mf1p33lnez": 'optionTwo',
              "am8ehyc8byjqgar0jgpub9": 'optionTwo',
              "loxhs1bqm25b708cmbf3g": 'optionTwo'
            },
            questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
          }
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
            })
    }
}