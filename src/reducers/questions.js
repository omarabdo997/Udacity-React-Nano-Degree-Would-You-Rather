import {
    ADD_QUESTION,
    RECIEVE_QUESTIONS, 
    ANSWER_QUESTION, 
    REMOVE_QUESTIONS
} from '../actions/questions'

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
        {
            const {questions, user} = action
            const newQuestions = {...questions}
            let answeredQuestions= {}
            let unansweredQuestions= {}
            for (let key in newQuestions) {
                if (key in user.answers) {
                    answeredQuestions[key]=newQuestions[key]
                    answeredQuestions[key].test=5;
                } else {
                    unansweredQuestions[key]=newQuestions[key]
                    unansweredQuestions[key].test=5;
                }
            }
            return {
                answeredQuestions,
                unansweredQuestions
            }
        }
        case REMOVE_QUESTIONS:
            return {
                answeredQuestions: {},
                unansweredQuestions: {}
            }
        case ANSWER_QUESTION:
        {
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
            return {
                unansweredQuestions,
                answeredQuestions
            }    
        }
        default:
            return state    
    }
}
export default questions;