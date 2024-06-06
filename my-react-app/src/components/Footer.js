import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrolledToBottom = window.innerHeight + currentScrollPos >= document.body.offsetHeight - 10;
    const isContentSmall = document.body.offsetHeight <= window.innerHeight;
    setVisible(isScrolledToBottom || isContentSmall);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      handleScroll();
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <footer className={`footer ${visible ? '' : 'hidden'}`}>
      <div className="footer-content">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Términos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
