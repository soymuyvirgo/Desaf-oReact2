import React, { useContext } from 'react';
import CardPizza from '../components/CardPizza';
import '../assets/css/Home.css';
import { PizzasContext } from '../context/PizzasContext';

const Home = () => {
  const { pizzas, loading } = useContext(PizzasContext);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container-home">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="card-container">
          <CardPizza pizza={pizza} />
        </div>
      ))}
    </div>
  );
};

export default Home;


