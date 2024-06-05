import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <div className="navbar">
      <button onClick={onLogout} className="navbar-button">Cerrar Sesión</button>
    </div>
  );
};

export default Navbar;
