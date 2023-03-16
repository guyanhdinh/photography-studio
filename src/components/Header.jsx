import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#191825",
    textDecorationColor: "#d61c4e"
  };
  const navBrand = {
    fontWeight: "bold",
    fontSize: "1.5rem"
  };

  return (
    <Navbar bg="transparent" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to={"/"} style={navBrand}>
          Studio One
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to={"/gallery"}
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"/about"}
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"/contact"}
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
