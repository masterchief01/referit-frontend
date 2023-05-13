import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


import logo from "../../Assets/images/logoR.png";

const SignInPageHeader = () => {

  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
            <b>REFER IT</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <>
                <Nav.Link href={`/`}>
                  <i className="fas fa-home"></i>
                </Nav.Link>
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default SignInPageHeader;
