import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import "../../assets/scss/main.css";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">V-SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Shirts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Button className="signup-btn">
                  <span></span>Sign-Up
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
