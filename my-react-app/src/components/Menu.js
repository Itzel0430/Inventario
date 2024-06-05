import React from 'react';
import './Menu.css';

const Menu = ({ handleSignInClick, handleSignUpClick }) => {
  return (
    <div className="menu-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <button onClick={handleSignInClick} className="btn">SIGN IN</button>
          </li>
          <li className="nav-item">
            <button onClick={handleSignUpClick} className="btn">SIGN UP</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

