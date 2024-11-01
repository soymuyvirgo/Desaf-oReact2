import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { email, logout, getProfile } = useContext(UserContext);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(email);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      if (!userEmail) {
        const profile = await getProfile();
        if (profile && profile.email) {
          setUserEmail(profile.email);
        } else {
          setError('No se pudo obtener el perfil del usuario.');
        }
      }
    };
    fetchProfile();
  }, [userEmail, getProfile]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Perfil del Usuario</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <p>Email: {userEmail}</p>
      <button className="btn btn-primary" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;

