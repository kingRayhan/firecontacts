import React, { Component } from 'react';
import db from './store/firebase';
import Home from './pages/Home';
import Add from './pages/Add';
import Login from './pages/Login';
import Register from './pages/Register';
import Bookmarks from './pages/Bookmarks';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedin ? <Component {...props} /> : <Redirect to={isLoggedin ? '/login' : '/'} />
    }
  />
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Home} isLoggedin={this.props.auth.isLoggedin} />
          <Route exact path='/add' component={Add} />
          <Route exact path='/bookmarks' component={Bookmarks} />
          <PrivateRoute
            exact
            path='/login'
            component={Login}
            isLoggedin={this.props.auth.isLoggedin}
          />
          <PrivateRoute exact path='/register' component={Register} isLogged />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(state => ({ ...state }))(App);
