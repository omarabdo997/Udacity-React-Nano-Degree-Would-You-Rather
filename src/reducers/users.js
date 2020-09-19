import {RECIEVE_USERS, ADD_USER_QUESTION, ANSWER_USER_QUESTION} from '../actions/users'

export default function users(state={}, action) {
    switch (action.type) {
        case RECIEVE_USERS:
            for (let key in action.users) {
                const answeredQuestions = Object.keys(action.users[key].answers).length
                const askedQuestions = action.users[key].questions.length
                action.users[key].score = answeredQuestions + askedQuestions
            }
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_QUESTION:
        {
            const {authedUser, question} = action
            const users = {...state}
            users[authedUser].questions.push(question.id)
            users[authedUser].score +=1
            return users
        }
        case ANSWER_USER_QUESTION:
        {
            const {qid, user, answer} = action
            const users = {...state}
            users[user].answers[qid] = answer
            users[user].score +=1
            return users
        }
        default:
            return state    
    }
}