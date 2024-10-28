import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PublicRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  return !token ? children : <Navigate to="/" />;
};

export default PublicRoute;
