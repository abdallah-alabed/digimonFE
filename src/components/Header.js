import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class Header extends Component {
  render() {
    return (
      <Navbar bg="warning" expand="lg">
        <Container>
          <Navbar.Brand href="/">Test Digimon App</Navbar.Brand>
         { this.props.auth0.isAuthenticated && 
          <Nav className="me-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/favourites">favourites</Nav.Link>
          </Nav>}
{ !this.props.auth0.isAuthenticated ? <LoginButton /> : <LogoutButton />}
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
