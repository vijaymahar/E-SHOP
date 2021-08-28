import React from "react";
import { Avatar } from "@material-ui/core";
import vmLogo from "../../assets/images/logos/vm-crow-info.png";
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
import { HeaderData } from "./HeaderData/HeaderData";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid className="mx-4">
          <Navbar.Brand>
            <Avatar alt="vm-logo" id="avatar-logo" src={vmLogo}></Avatar>
          </Navbar.Brand>

          <Navbar.Brand href="#home" id="brand-name">
            V-SHOP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" id="pagesID">
              {HeaderData.map((cur, ind) => {
                return (
                  <Nav.Link href="#features" className="pageLink" key={ind}>
                    <span></span>
                    {cur}
                  </Nav.Link>
                );
              })}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <button id="signup-btn">
                  <span></span>Sign-Up
                </button>
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
