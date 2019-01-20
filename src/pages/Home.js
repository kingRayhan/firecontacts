import React, { Component } from 'react'
import Layout from '../components/Layout'

import { connect } from 'react-redux'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Input,
} from 'reactstrap'
import { removeContact } from '../store/actions/removeContact'
import { addToBookMark } from '../store/actions/addToBookmark'
import { removeFromBookmark } from '../store/actions/removeFromBookmark'

class Home extends Component {
    state = {
        searchTerm: '',
    }

    isBookmarked = id => {
        return this.props.bookmarks.find(bookmarks => bookmarks.id === id)
            ? true
            : false
    }

    removeContact = contact => {
        if (window.confirm('Sure to delete?')) {
            this.props.removeContact(contact.id)
            this.props.removeFromBookmark(contact.id)
        }
    }

    search = e => {
        this.setState({ searchTerm: e.target.value })
    }

    render() {
        if (this.props.contacts.length === 0)
            return (
                <Layout>
                    <h1 className="text-muted">
                        No saved contact in phonebook
                    </h1>
                </Layout>
            )

        return (
            <Layout>
                <div>
                    <Input
                        onChange={this.search}
                        placeholder="Search by Name / Email / phonenumber"
                    />
                </div>

                {this.props.contacts
                    .filter(
                        c =>
                            c.name
                                .toLowerCase()
                                .includes(
                                    this.state.searchTerm.toLowerCase()
                                ) ||
                            c.email
                                .toLowerCase()
                                .includes(
                                    this.state.searchTerm.toLowerCase()
                                ) ||
                            c.phone
                                .toLowerCase()
                                .includes(this.state.searchTerm.toLowerCase())
                    )
                    .map(contact => (
                        <Card className="my-3" key={contact.id}>
                            <CardHeader>{contact.name}</CardHeader>
                            <CardBody>
                                <p>Name: {contact.name}</p>
                                <p>Email: {contact.email}</p>
                                <p>Phone: {contact.phone}</p>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    color={
                                        this.isBookmarked(contact.id)
                                            ? `primary`
                                            : `secondary`
                                    }
                                    onClick={() =>
                                        this.props.addToBookMark(contact)
                                    }
                                >
                                    <i className="fa fa-heart" />
                                </Button>
                                <Button
                                    color="danger"
                                    className="ml-2"
                                    onClick={() => this.removeContact(contact)}
                                >
                                    <i className="fa fa-times" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
            </Layout>
        )
    }
}

export default connect(
    state => ({ ...state }),
    { removeContact, addToBookMark, removeFromBookmark }
)(Home)
