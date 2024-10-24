import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ pizza, addToCart }) => {
  const { id, name, ingredients, price, img } = pizza;

  return (
    <div className="card-pizza">
      <Link to={`/pizza/${id}`}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </Link>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>🍕 {ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${price}</p>
      <button onClick={() => addToCart(pizza)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default CardPizza;




