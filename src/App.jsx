import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import NotFound from './pages/NotFound'; 

function App() {
  const [cart, setCart] = useState([]);
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

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const increaseCount = (pizzaId) => {
    setCart(
      cart.map((item) =>
        item.id === pizzaId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (pizzaId) => {
    setCart(
      cart.reduce((acc, item) => {
        if (item.id === pizzaId) {
          if (item.count > 1) {
            acc.push({ ...item, count: item.count - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  return (
    <Router>
      <div>
        <Navbar cart={cart} />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                pizzas={pizzas}
                addToCart={addToCart}
                loading={loading}
              />
            }
          />
          {/* Ruta para el detalle de la pizza */}
          <Route
            path="/pizza/:id"
            element={
              <Pizza
                addToCart={addToCart}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

