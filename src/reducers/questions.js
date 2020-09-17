import {ADD_QUESTION, RECIEVE_QUESTIONS, ANSWER_QUESTION} from '../actions/questions'

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
        case ANSWER_QUESTION:
            let unansweredQuestions = {...state.unansweredQuestions};
            let answeredQuestions = {...state.answeredQuestions};
            let question
            if (action.qid in unansweredQuestions) {
                question = unansweredQuestions[action.qid]
                delete unansweredQuestions[action.qid]
            } else {
                question = answeredQuestions[action.qid]
            }
            question[action.answer].votes.push(action.user)
            answeredQuestions[action.qid]=question  
            console.log('here now')          
            return {
                unansweredQuestions,
                answeredQuestions
            }    




        default:
            return state    
    }
}
export default questions;