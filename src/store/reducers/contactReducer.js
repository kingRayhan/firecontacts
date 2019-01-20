import toastr from 'toastr'
import db from '../firebase'
import { getAuth } from './authReducer'
import {
    ADD_CONTACT,
    REMOVE_CONTACT,
    EDIT_CONTACT,
} from '../actions/actionTypes'
import { loadingState } from './metaReducer'

export const SET_CONTACTS = 'SET_CONTACTS'

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
        case SET_CONTACTS: {
            return payload
        }

        default:
            return state
    }
}

export default reducer

export const saveContact = contact => dispatch => {
    const userid = localStorage.getItem('auth_userId')

    db.collection('users')
        .doc(userid)
        .get()
        .then(res => {
            // get existing contact array
            const contacts =
                res.data().contacts !== undefined
                    ? [...res.data().contacts]
                    : []
            // push new contact to the array
            contacts.push(contact)

            // overrite existing contact array with new contact after push
            db.collection('users')
                .doc(userid)
                .update({ contacts })
                .then(res => {
                    toastr.success('Successfully Saved!!')
                })
        })
}

export const setContacts = payload => ({ type: SET_CONTACTS, payload })
