import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para registrar al usuario
    onSignUp({ name, email, password });
    // Limpiar campos del formulario
    setName('');
    setEmail('');
    setPassword('');
    alert("Registro Exitoso"); // Mensaje de confirmación de registro exitoso
  };

  return (
    <div className="signup-form">
      <h2 className="form-heading">SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">NAME:</label>
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
          <label htmlFor="email" className="form-label">EMAIL:</label>
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
          <button type="submit" className="btn">SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
