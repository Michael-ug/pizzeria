import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar({ total }) {
  return (
    <Navbar expand="lg" className="barra bg-dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Pizzería Mamma Mia</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="barra me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">🍕 Home</Nav.Link>
            <Nav.Link href="#action2">🔓 Profile</Nav.Link>
            <Nav.Link href="#action3">🔐 Register</Nav.Link>
          </Nav>
          <div className="precio d-flex ">
            <span className="me-2">🛒 Total: ${total}</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;