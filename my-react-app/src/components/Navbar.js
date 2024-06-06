import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledToTop = currentScrollPos < 100;
      setVisible((prevScrollPos > currentScrollPos || isScrolledToTop) && !isScrolledToTop);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div className={`navbar ${visible ? '' : 'hidden'}`}>
      <button onClick={onLogout} className="navbar-button">Cerrar Sesión</button>
    </div>
  );
};

export default Navbar;
