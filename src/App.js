import React, { Component } from 'react'
import db from './store/firebase'
import Home from './pages/Home'
import Add from './pages/Add'
import Login from './pages/Login'
import Register from './pages/Register'
import Bookmarks from './pages/Bookmarks'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLoggedin, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('auth_userId') !== null ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
)

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute exact path="/add" component={Add} />
                    <PrivateRoute
                        exact
                        path="/bookmarks"
                        component={Bookmarks}
                    />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect(state => ({ ...state }))(App)
