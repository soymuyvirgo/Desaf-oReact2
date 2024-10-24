import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = ({ addToCart }) => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener la pizza:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!pizza) {
    return <p>No se encontró la pizza.</p>;
  }

  const { name, desc, ingredients, price, img } = pizza;

  return (
    <div className="pizza-detail">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
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

export default Pizza;
