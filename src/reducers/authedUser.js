import {AUTH_USER, UNAUTH_USER} from '../actions/authedUser'

export default function authedUser (state={}, action) {
    switch (action.type) {
        case AUTH_USER:
            return action.user
        case UNAUTH_USER:
            return {}    
        default:
            return state
    }
}