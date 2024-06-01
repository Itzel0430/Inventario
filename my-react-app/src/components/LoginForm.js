import React, { useState } from 'react';

const LoginForm = ({ onLogin, onBackToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para autenticar al usuario, por ejemplo, con una API
    // En este ejemplo, simplemente pasamos los datos de inicio de sesión al prop onLogin
    onLogin({ email, password });
    setEmail('');
    setPassword('');
  };

  const handleBackToHome = () => {
    // Lógica para regresar al home
    onBackToHome();
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn">Sign In</button>
          <button type="button" className="btn" onClick={handleBackToHome}>Back to Home</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
