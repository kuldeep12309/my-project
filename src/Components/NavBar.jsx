// NavBar.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom"; // ✅ Correct import
import "./NavBar.css"; // Optional - only if you're using custom styles

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          I Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Header
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown title="Resume" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/resume">
                Resume
              </NavDropdown.Item>
              {/* Add more dropdown items if needed */}
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
