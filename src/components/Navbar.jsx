import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const CustomNavbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  const formattedTotal = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  });

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: "100%" }}>
      <Container fluid> 
        <Navbar.Brand as={NavLink} to="/">Pizzería Alexander</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => (isActive ? 'fw-bold' : '')}
            >
              🍕 Home
            </Nav.Link> 
            <Nav.Link
              as={NavLink}
              to="/cart"
              className={({ isActive }) => (isActive ? 'fw-bold' : '')}
            >
              🛒 Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center"> 
            {token ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/profile"
                  className={({ isActive }) => (isActive ? 'fw-bold' : '')}
                >
                  🔓 Profile
                </Nav.Link> 
                <Button variant="outline-dark" className="ms-2" onClick={logout}>
                  🔒 Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline-dark" className="ms-2" as={NavLink} to="/login">
                  🔐 Login
                </Button>
                <Button variant="outline-dark" className="ms-2" as={NavLink} to="/register">
                  🔐 Register
                </Button>
              </>
            )}
            <Button variant="outline-dark" className="ms-3" as={NavLink} to="/cart">
              🛒 Total: {formattedTotal}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;





