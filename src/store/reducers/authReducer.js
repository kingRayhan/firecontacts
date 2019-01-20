import { AUTH_SETUSER } from '../actions/actionTypes'
import db, { auth } from '../firebase'

const GET_AUTH = 'GET_AUTH'

const reducer = (
    state = {
        isLoggedin: false,
        user: null,
    },
    { type, payload }
) => {
    switch (type) {
        case AUTH_SETUSER: {
            return payload
        }
        case GET_AUTH: {
            return state
        }
        default:
            return state
    }
}

export default reducer

export const authSetuser = () => dispatch => {
    auth.onAuthStateChanged(user => {
        if (user)
            db.collection('users')
                .doc(user.uid)
                .get()
                .then(res => {
                    dispatch({
                        type: AUTH_SETUSER,
                        payload: {
                            isLoggedin: true,
                            userId: user.uid,
                            user: res.data().profile,
                        },
                    })
                })
        else
            dispatch({
                type: AUTH_SETUSER,
                payload: {
                    isLoggedin: false,
                    user: null,
                },
            })
    })
}

export const authLogout = () => dispatch => {
    auth.signOut().then(res => {
        dispatch({
            type: AUTH_SETUSER,
            payload: {
                isLoggedin: false,
                user: null,
            },
        })
    })
}

export const getAuth = () => ({
    type: GET_AUTH,
})
