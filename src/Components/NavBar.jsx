import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
  const expand = 'md'; 

  return (
    <Navbar expand={expand} bg="primary" data-bs-theme="dark" className="container-fluid">
      <Container fluid>
        <Navbar.Brand>I Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas className="bg-primary"
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          style={{ width: '50%' }} 
        >
          <Offcanvas.Header closeButton className="text-white">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="ms-auto my-2 my-lg-0 justify-content-end flex-grow-1 pe-3"
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
