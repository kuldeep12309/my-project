import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // 

function NavBar() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="container-fluid"  >
      <Container fluid>
        <Navbar.Brand>I Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="text-white">
              Header
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className="text-white">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
