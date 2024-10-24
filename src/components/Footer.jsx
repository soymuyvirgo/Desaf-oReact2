import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2021 - Pizzería Alexander! - Todos los derechos reservados</p>
      <p>Contacto: contacto@pizzeriaalexander.com | Tel: +56 9 1234 5678</p>
    </footer>
  );
};

// Estilos para el footer (opcional)
const footerStyle = {
  backgroundColor: '#343a40',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  position: 'relative',
  bottom: 0,
  width: '100%'
};

export default Footer;
