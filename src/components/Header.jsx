function Header() {
    const headerStyle = {
      backgroundImage: `url('/src/assets/img/header.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw', 
      height: '400px',  
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      position: 'relative'
    };
  
    const overlayStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      padding: '20px'
    };
  
    const titleStyle = {
      fontSize: '48px',
      margin: '0'
    };
  
    const descriptionStyle = {
      fontSize: '24px',
      margin: '10px 0 0'
    };
  
    return (
      <header style={headerStyle}>
        <div style={overlayStyle}>
          <h1 style={titleStyle}>¡Pizzería Alexander!</h1>
          <p style={descriptionStyle}>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </header>
    );
  }
  
  export default Header;
  
  
  