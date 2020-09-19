import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import loading from './loading'
import messages from './messages'
import {combineReducers} from 'redux'

export default combineReducers({
    authedUser,
    users,
    questions,
    loading,
    messages
})