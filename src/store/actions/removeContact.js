import toastr from 'toastr'
import { REMOVE_CONTACT } from './actionTypes'

import db from '../firebase'
export const removeContact = contactId => dispatch => {
    const userid = localStorage.getItem('auth_userId')

    db.collection('users')
        .doc(userid)
        .get()
        .then(res => {
            // get existing contact array
            const contacts = res.data().contacts
            const index = contacts.findIndex(c => c.id === contactId)
            contacts.splice(index, 1)

            // overrite existing contact array with new contact after push
            db.collection('users')
                .doc(userid)
                .update({ contacts })
                .then(res => {
                    toastr.success('Successfully Deleted!!')
                    dispatch({
                        type: REMOVE_CONTACT,
                        payload: contactId,
                    })
                })
        })
}
