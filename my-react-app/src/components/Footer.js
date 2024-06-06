import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledToTop = currentScrollPos <= 10 || currentScrollPos >= 0;
      const isContentSmall = document.body.offsetHeight <= window.innerHeight;
      setVisible((prevScrollPos > currentScrollPos || isScrolledToTop) && !isScrolledToTop || isContentSmall);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

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
