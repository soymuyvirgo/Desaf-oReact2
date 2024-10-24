import React from 'react';
import CardPizza from '../components/CardPizza';
import '../assets/css/Home.css';

const Home = ({ pizzas, addToCart }) => {
  return (
    <div className="container-home">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="card-container">
          <CardPizza
            pizza={pizza}
            addToCart={addToCart}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;