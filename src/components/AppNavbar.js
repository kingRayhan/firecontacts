import React from "react";

import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect } from "react-redux";
import { authLogout } from "../store/reducers/authReducer";
class AppNavba extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  logout = () => {
    this.props.authLogout();
    localStorage.removeItem("auth_userId");
  };

  render() {
    return (
      <div>
        <Navbar color="danger" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            Phonebook App
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {this.props.auth.isLoggedin ? (
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/add">
                    New Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/bookmarks">
                    Bookmarks
                    {this.props.bookmarks.length !== 0 && (
                      <Badge className="ml-1">
                        {this.props.bookmarks.length}
                      </Badge>
                    )}
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Hello, {this.props.auth.user.first_name}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>settings</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.logout}>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          ) : (
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          )}
        </Navbar>
      </div>
    );
  }
}

export default connect(
  ({ auth, bookmarks }) => ({ auth, bookmarks }),
  { authLogout }
)(AppNavba);
