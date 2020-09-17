import {_getUsers} from '../utils/_DATA'
import {setLoading} from './loading' 

export const RECIEVE_USERS = 'RECIEVE_USERS'


const recieveUsers = (users) => ({
    type: RECIEVE_USERS,
    users
})

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