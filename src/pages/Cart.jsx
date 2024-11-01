import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total, clearCart } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ cart })
      });
      if (!response.ok) {
        throw new Error('Error al realizar la compra.');
      }
      const data = await response.json();
      setSuccessMessage('Compra realizada con éxito.');
      clearCart();
    } catch (error) {
      console.error('Error en checkout:', error);
      setErrorMessage('No se pudo realizar la compra. Intente nuevamente.');
    }
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item d-flex align-items-center mb-3">
              <img src={item.img} alt={item.name} style={{ width: '100px', marginRight: '20px' }} />
              <div>
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.count}</p>
                <div>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => increaseCount(item.id)}>+</button>
                  <button className="btn btn-sm btn-secondary" onClick={() => decreaseCount(item.id)}>-</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <button
        className="btn btn-primary"
        onClick={handleCheckout}
        disabled={cart.length === 0}
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;





