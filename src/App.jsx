import React from 'react';
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


import { CartProvider } from './context/CartContext';
import { PizzasProvider } from './context/PizzasContext';

function App() {
  return (
    <CartProvider>
      <PizzasProvider>
        <Router>
          <div>
            <Navbar />
            <Header />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/pizza/:id"
                element={<Pizza />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </PizzasProvider>
    </CartProvider>
  );
}

export default App;


