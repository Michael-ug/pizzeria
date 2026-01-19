import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useCart } from '../Context/CartContext.jsx';

function NavBar() {
  const { total } = useCart();

  return (
    <Navbar expand="lg" className="barra bg-dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="barra me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
            <Nav.Link as={Link} to="/registro">🔐 Registro</Nav.Link>
            <Nav.Link as={Link} to="/login">🔓 Login</Nav.Link>
            <Nav.Link as={Link} to="/profile">👤 Perfil</Nav.Link>
          </Nav>
          <div className="precio d-flex ">
            <Link to="/cart" className="text-white text-decoration-none">
              <span className="me-2">🛒 Total: ${total}</span>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
