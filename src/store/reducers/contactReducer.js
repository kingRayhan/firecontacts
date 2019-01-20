import {
    ADD_CONTACT,
    REMOVE_CONTACT,
    EDIT_CONTACT,
} from '../actions/actionTypes'

import db from '../firebase'
import { getAuth } from './authReducer'

const contacts = []

const reducer = (state = contacts, { type, payload }) => {
    switch (type) {
        case ADD_CONTACT: {
            return [payload, ...state]
        }
        case REMOVE_CONTACT: {
            // id -> payload
            const contacts = [...state]
            const index = contacts.findIndex(contact => contact.id === payload)
            contacts.splice(index, 1)
            return contacts
        }
        case EDIT_CONTACT: {
            // payload: { id , newdata }
            const contacts = [...state]
            const index = contacts.findIndex(
                contact => contact.id === payload.id
            )
            contacts[index] = payload.newData
            return contacts
        }

        default:
            return state
    }
}

export default reducer

export const saveContact = contact => dispatch => {
    // dispatch(getAuth())
}
