import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SingUpForm';
import Navbar from './components/Navbar';
import VerticalMenu from './components/VerticalMenu';
import Footer from './components/Footer';

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignInClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
    setShowMenu(false);
  };

  const handleSignUpClick = () => {
    setShowLoginForm(false);
    setShowSignUpForm(true);
    setShowMenu(false);
  };

  const handleLogin = (credentials) => {
    // Lógica de autenticación aquí
    setIsLoggedIn(true);
    setShowLoginForm(false);
    setShowSignUpForm(false);
    setShowMenu(false); // Oculta el menú al iniciar sesión
  };

  const handleSignUp = (userData) => {
    // Lógica de registro aquí
    setIsLoggedIn(true); // Cambiar a true si el registro es exitoso
    setShowSignUpForm(false);
    setShowMenu(false); // Oculta el menú al registrarse
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowMenu(true);
  };

  const handleBackToHome = () => {
    setIsLoggedIn(false);
    setShowMenu(true);
  };

  return (
    <div className="App">
      {isLoggedIn && <Navbar onLogout={handleLogout} />}
      <div className="main-content">
        {showMenu && <Menu handleSignInClick={handleSignInClick} handleSignUpClick={handleSignUpClick} />}
        {showLoginForm && <LoginForm onLogin={handleLogin} />}
        {showSignUpForm && <SignUpForm onSignUp={handleSignUp} />}
        {isLoggedIn && (
          <>
            <VerticalMenu />
          </>
        )}
        {(showLoginForm || showSignUpForm) && (
          <button onClick={handleBackToHome} className="btn">Volver</button>
        )}
      </div>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default App;
