import React from 'react';
import './Menu.css';

const Menu = ({ handleSignInClick, handleSignUpClick }) => {
  return (
    <div className="menu-container">
      <nav className="lol">
        <ul className="lol-links">
          <li className="lol-item">
            <button onClick={handleSignInClick} className="btn">SIGN IN</button>
          </li>
          <li className="lol-item">
            <button onClick={handleSignUpClick} className="btn">SIGN UP</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

