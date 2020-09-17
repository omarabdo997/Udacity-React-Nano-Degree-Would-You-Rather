import {RECIEVE_USERS} from '../actions/users'

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
        default:
            return state    
    }
}