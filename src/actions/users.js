import {_getUsers} from '../utils/_DATA'

export const RECIEVE_USERS = 'RECIEVE_USERS'


const recieveUsers = (users) => ({
    type: RECIEVE_USERS,
    users
})

export const handleRecieveUsers = () => {
    return (dispatch, getState) => {
        _getUsers()
            .then((users) => {
                dispatch(recieveUsers(users))
            })
    }
} 