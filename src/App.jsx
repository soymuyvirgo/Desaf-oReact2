// App.jsx
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
import Profile from './pages/Profile';

import { CartProvider } from './context/CartContext';
import { PizzasProvider } from './context/PizzasContext';
import { UserProvider } from './context/UserContext';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <PizzasProvider>
          <Router>
            <div>
              <Navbar />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route
                  path="/register"
                  element={
                    <PublicRoute>
                      <Register />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <Login />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <PrivateRoute>
                      <Cart />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </PizzasProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;


