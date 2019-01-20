import { combineReducers } from 'redux'

import contacts from './contactReducer'
import bookmarks from './bookmarkReducer'
import auth from './authReducer'

const rootReducer = combineReducers({ contacts, bookmarks, auth })

export default rootReducer
