import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'toastr/build/toastr.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import db from './store/firebase'
import Home from './pages/Home'
import Add from './pages/Add'
import Login from './pages/Login'
import Register from './pages/Register'
import Bookmarks from './pages/Bookmarks'
import PrivateRoute from './components/PrivateRoute'
import store from './store'
import { authSetuser } from './store/reducers/authReducer'

store.dispatch(authSetuser()) // check is logged in

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/bookmarks" component={Bookmarks} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)
