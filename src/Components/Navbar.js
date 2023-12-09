import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Assets/Logo.svg";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} style={{ height: "75px" }} alt="company logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="links">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                Pages
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                Links
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                Elements
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                News
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
