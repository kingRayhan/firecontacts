import React, { Component } from 'react'
import Layout from '../components/Layout'
import {
    FormGroup,
    Input,
    Label,
    FormFeedback,
    Button,
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap'

import { connect } from 'react-redux'
import { auth } from '../store/firebase'
import toastr from 'toastr'
import { authSetuser } from '../store/reducers/authReducer'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                localStorage.setItem('auth_userId', res.user.uid)
            })
            .catch(e => toastr.error(e.message))
    }

    render() {
        return (
            <Layout>
                <Card>
                    <CardHeader>Login</CardHeader>
                    <CardBody>
                        <form onSubmit={this.onSubmit}>
                            {Object.keys(this.state).map(key => (
                                <FormGroup key={key}>
                                    <Input
                                        placeholder={key}
                                        value={this.state[key]}
                                        name={key}
                                        onChange={this.onChange}
                                        type={
                                            key === 'password' ? key : 'email'
                                        }
                                    />
                                </FormGroup>
                            ))}
                            <FormGroup>
                                <button>Login</button>
                            </FormGroup>
                        </form>
                    </CardBody>
                </Card>
            </Layout>
        )
    }
}

export default connect(
    null,
    { authSetuser }
)(Login)
