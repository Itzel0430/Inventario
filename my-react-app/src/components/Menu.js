import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <nav className="navbar">
        <img src="logo192.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ACERCA DE</a></li>
          <li><a href="#">SERVICIOS</a></li>
          <li><a href="#">CONTACTO</a></li>
          <li><a href="#">SIGN IN</a></li>
          <li><a href="#">SIGN UP</a></li>
          <li><a href="#">SUCURSALES</a></li>
          <li><a href="#">VEHICULOS</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;


