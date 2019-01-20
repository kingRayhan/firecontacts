import React, { Component } from 'react'
import Layout from '../components/Layout'
import toastr from 'toastr'
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

import db, { auth } from '../store/firebase'

import { connect } from 'react-redux'

class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        facebook_profile_url: '',
        email: '',
        password: '',
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault()

        const {
            first_name,
            last_name,
            facebook_profile_url,
            email,
            password,
        } = this.state

        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                db.collection('users')
                    .doc(res.user.uid)
                    .set({
                        profile: {
                            first_name,
                            last_name,
                            facebook_profile_url,
                            email,
                        },
                    })
                    .then(res => toastr.success('Registration successfully'))
            })
            .catch(e => toastr.error(e.message))
    }

    render() {
        return (
            <Layout>
                <Card>
                    <CardHeader>Register</CardHeader>
                    <CardBody>
                        <form onSubmit={this.onSubmit}>
                            {Object.keys(this.state).map(key => (
                                <FormGroup key={key}>
                                    <Label for={key}>{key}</Label>
                                    <Input
                                        id={key}
                                        placeholder={key}
                                        value={this.state[key]}
                                        name={key}
                                        onChange={this.onChange}
                                        type={
                                            key === 'password' ||
                                            key === 'email'
                                                ? key
                                                : key === 'facebook_profile_url'
                                                ? 'url'
                                                : 'text'
                                        }
                                    />
                                </FormGroup>
                            ))}
                            <FormGroup>
                                <button>Register</button>
                            </FormGroup>
                        </form>
                    </CardBody>
                </Card>
            </Layout>
        )
    }
}

export default connect(null)(Register)
