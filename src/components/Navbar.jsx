import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  const formattedTotal = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  });

  const token = false;

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: "100%" }}>
      <Container fluid> 
        <Navbar.Brand as={Link} to="/">Pizzería Alexander</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">🍕 Home</Nav.Link> 
            {/* Cart añadido al NavBar */}
            <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center"> 
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link> 
                <Button variant="outline-dark" className="ms-2">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-dark" className="ms-2" as={Link} to="/login">🔐 Login</Button>
                <Button variant="outline-dark" className="ms-2" as={Link} to="/register">🔐 Register</Button>
              </>
            )}
            <Button variant="outline-dark" className="ms-3" as={Link} to="/cart">
              🛒 Total: {formattedTotal}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
