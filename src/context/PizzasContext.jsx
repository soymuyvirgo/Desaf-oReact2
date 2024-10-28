import React, { createContext, useState, useEffect } from 'react';

export const PizzasContext = createContext();

export const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => {
        setPizzas(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener las pizzas:', error);
        setLoading(false);
      });
  }, []);

  return (
    <PizzasContext.Provider value={{ pizzas, loading }}>
      {children}
    </PizzasContext.Provider>
  );
};
