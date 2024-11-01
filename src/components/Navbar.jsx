import React, { useContext } from 'react';
import { Navbar as BootstrapNavbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const formattedTotal = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary" style={{ width: "100%" }}>
      <Container fluid> 
        <BootstrapNavbar.Brand as={NavLink} to="/">Pizzería Alexander</BootstrapNavbar.Brand> 
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
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
                <Button variant="outline-dark" className="ms-2" onClick={handleLogout}>
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
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;







