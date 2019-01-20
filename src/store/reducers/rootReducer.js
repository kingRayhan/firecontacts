import { combineReducers } from 'redux'

import contacts from './contactReducer'
import bookmarks from './bookmarkReducer'
import auth from './authReducer'
import meta from './metaReducer'

const rootReducer = combineReducers({ contacts, bookmarks, auth, meta })

export default rootReducer
