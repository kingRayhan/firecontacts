import { AUTH_SETUSER } from '../actions/actionTypes'
import db, { auth } from '../firebase'
import { loadingState } from './metaReducer'
import { setContacts } from './contactReducer'

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
        default:
            return state
    }
}

export default reducer

export const authSetuser = () => dispatch => {
    dispatch(loadingState(true))
    auth.onAuthStateChanged(user => {
        if (user)
            db.collection('users')
                .doc(user.uid)
                .get()
                .then(res => {
                    dispatch(loadingState(false))
                    dispatch(setContacts(res.data().contacts || []))

                    dispatch({
                        type: AUTH_SETUSER,
                        payload: {
                            isLoggedin: true,
                            userId: user.uid,
                            user: res.data().profile,
                        },
                    })
                })
        else {
            dispatch(loadingState(false))
            dispatch({
                type: AUTH_SETUSER,
                payload: {
                    isLoggedin: false,
                    user: null,
                },
            })
        }
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
