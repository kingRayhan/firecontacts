import React from "react";

import AppNavbar from "./AppNavbar";

import { Container, Row, Col } from "reactstrap";

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <Container className="py-5">
          <Row>
            <Col sm={8} className="mx-auto">
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
