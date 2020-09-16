export const AUTH_USER = 'AUTH_USER'
export const UNAUTH_USER = 'UNAUTH_USER'

export function authUser(user) {
    return {
        type: AUTH_USER,
        user
    }
}
export function unauthUser() {
    return {
        type: UNAUTH_USER
    }
}