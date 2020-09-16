import {ADD_QUESTION, RECIEVE_QUESTIONS} from '../actions/questions'

const questions = (state={
    answeredQuestions: {},
    unansweredQuestions: {},
}, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                unansweredQuestions: {
                    ...state.unansweredQuestions,
                    [action.question.id]:action.question,
                }
            }
        case RECIEVE_QUESTIONS:
            return {
                answeredQuestions: action.questions.answeredQuestions,
                unansweredQuestions: action.questions.unansweredQuestions
            }




        default:
            return state    
    }
}
export default questions;