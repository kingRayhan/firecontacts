import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth.isLoggedin === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
)

export default connect(auth => ({ ...auth }))(PrivateRoute)
