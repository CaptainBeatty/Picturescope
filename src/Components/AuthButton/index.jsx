import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem('authToken');
    
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    navigate('/loginpage');
    window.location.reload();
  };

  return (
    <div>
      {isLoggedIn ? (
        <NavLink to="#" onClick={handleLogout}>Logout</NavLink>
      ) : (
        <NavLink to="/loginpage">Login</NavLink>
      )}
    </div>
  );
};

export default AuthButton;
