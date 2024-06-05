import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = ({ onSignUp, onBackToHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para registrar al usuario, por ejemplo, con una API
    // En este ejemplo, simplemente pasamos los datos de registro al prop onSignUp
    onSignUp({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleBackToHome = () => {
    // Lógica para regresar al home
    onBackToHome();
  };

  return (
    <div className="signup-form">
      <h2 className="form-heading">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
