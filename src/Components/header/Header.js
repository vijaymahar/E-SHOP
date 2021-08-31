import React from "react";
import { Avatar } from "@material-ui/core";
import vmLogo from "../../assets/images/logos/vm-crow-info.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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

          <Navbar.Brand>
            <NavLink
              to="/home"
              className="text-decoration-none"
              id="brand-name"
            >
              V-SHOP
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" id="pagesID">
              {HeaderData.map((cur, ind) => {
                return (
                  <NavLink to={cur.link} className="pageLink" key={ind}>
                    <span></span>
                    {cur.page}
                  </NavLink>
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
