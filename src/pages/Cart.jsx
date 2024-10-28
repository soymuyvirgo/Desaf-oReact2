import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.count}</p>
            <button onClick={() => increaseCount(item.id)}>+</button>
            <button onClick={() => decreaseCount(item.id)}>-</button>
          </div>
        ))
      )}
      <h3>Total: ${total}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;



