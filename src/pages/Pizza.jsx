import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzasContext } from '../context/PizzasContext';
import { CartContext } from '../context/CartContext';

const PizzaDetail = () => {
  const { id } = useParams();
  const { pizzas, loading } = useContext(PizzasContext);
  const { addToCart } = useContext(CartContext);

  if (loading) {
    return <p>Cargando...</p>;
  }

  const pizza = pizzas.find((pizza) => pizza.id === parseInt(id));

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  const { name, img, description, price, ingredients } = pizza;

  return (
    <div className="pizza-detail">
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{description}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>🍕 {ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${price}</p>
      <button onClick={() => addToCart(pizza)}>Agregar al carrito</button>
    </div>
  );
};

export default PizzaDetail;

