import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false); 

  // Método de login simulado
  const login = (email, password) => {
    // Credenciales permitidas
    const validEmail = '1234@pizza.com';
    const validPassword = '12345678';

    if (email === validEmail && password === validPassword) {
      setToken(true);
      return true; // Login exitoso
    } else {
      return false; // Credenciales inválidas
    }
  };

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


