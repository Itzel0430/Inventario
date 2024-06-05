import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SingUpForm';

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showMenu, setShowMenu] = useState(true); 

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

  //Volver a mostrar el menú
  const handleBackButtonClick = () => {
    setShowLoginForm(false);
    setShowSignUpForm(false);
    setShowMenu(true); 
  };

  return (
    <div className="App ">
      <div className="main-content ">
        {showMenu && <Menu handleSignInClick={handleSignInClick} handleSignUpClick={handleSignUpClick} />}
        {showLoginForm && <LoginForm />}
        {showSignUpForm && <SignUpForm />}
        {(showLoginForm || showSignUpForm) && (
          <button onClick={handleBackButtonClick} className="btn ">Volver</button>
        )}
      </div>
    </div>
  );
};

export default App;

