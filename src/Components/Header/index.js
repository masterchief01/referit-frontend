import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from './styles/style.module.css'
import firebase from 'firebase/compat/app';
import { useNavigate } from "react-router-dom";


import logo from "../../Assets/images/logoR.png";

const Header = ({ auth, userId }) => {
  const navigate = useNavigate();

  const logOut = async () => {
    await firebase.auth().signOut().then(() => {
      let path = '/';
      navigate(path);
    })
      .catch((err) => {
        console.log("Signout Failed");
      })
  }

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
              {auth ? <>
                <Nav.Link href={`/`}>
                  <i className="fas fa-home"></i>
                </Nav.Link>
                <Nav.Link href={`/users/${userId}`}>
                  <i className="fas fa-user"></i>
                </Nav.Link>
                <Nav.Link>
                  <button style={{ border: "none", backgroundColor: "inherit" }} onClick={logOut} ><i className="fas fa-sign-out-alt"></i></button>
                </Nav.Link>
              </> : <>
                <Nav.Link className={styles.signIn} href="/signin">
                  Sign in
                </Nav.Link>
              </>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
