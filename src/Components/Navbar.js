import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Assets/Logo.svg";
import { useTranslation } from "react-i18next";
import LangSelector from "./LangSelector";

export default function NavbarComponent() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              style={{ height: "75px" }}
              className="nav-brand-mobile"
              alt="company logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="links">
                {t("home")}
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                {t("pages")}
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                {t("links")}
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                {t("elements")}
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                {t("news")}
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                {t("contacts")}
              </Nav.Link>
            </Nav>
            <LangSelector />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
