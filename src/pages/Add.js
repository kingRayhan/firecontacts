import React, { Component } from "react";
import Layout from "../components/Layout";
import { FormGroup, Input, FormFeedback, Button } from "reactstrap";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { addContact } from "../store/actions/addContact";

import { isEmail, isEmpty } from "validator";
import { saveContact } from "../store/reducers/contactReducer";

class Add extends Component {
  state = {
    contact: {
      name: "",
      email: "",
      phone: "",
    },
    errors: {},
  };

  onSubmit = async (e) => {
    e.preventDefault();

    //TODO: async validation
    const errors = {};

    Object.keys(this.state.contact).map((key) => {
      if (isEmpty(this.state.contact[key])) {
        return (errors[key] = `${key} can't be empty`);
      }
      key === "email" &&
        !isEmail(this.state.contact[key]) &&
        (errors[key] = `${key} is not a valid email address`);
    });
    this.setState({ errors });

    // TODO: how it works?
    if (Object.keys(errors).length === 0) {
      this.props.addContact({ id: v4(), ...this.state.contact }); // save in redux store
      this.props.saveContact(
        { id: v4(), ...this.state.contact },
        this.props.auth.userId
      ); // save in firebase db
      this.props.history.push("/");
    }
  };

  onChange = (e) => {
    const contact = { ...this.state.contact };
    contact[e.target.name] = e.target.value;

    this.setState({ contact });
  };

  render() {
    return (
      <Layout>
        <div className="py-3">
          <h2 className="text-uppercase">Add new contact</h2>
        </div>
        <form onSubmit={this.onSubmit}>
          {Object.keys(this.state.contact).map((key) => (
            <FormGroup key={key}>
              <Input
                onChange={this.onChange}
                placeholder={key}
                // type={key === 'email' ? 'email' : 'text'}
                type={`text`}
                name={key}
                invalid={
                  Object.keys(this.state.errors).length &&
                  this.state.errors[key]
                    ? true
                    : false
                }
              />
              {this.state.errors[key] && (
                <FormFeedback>{this.state.errors[key]}</FormFeedback>
              )}
            </FormGroup>
          ))}
          <Button color="danger">Save</Button>
        </form>
      </Layout>
    );
  }
}

export default connect(
  (state) => ({ ...state }),
  { addContact, saveContact }
)(Add);
