import React, { useState } from 'react';
import './LogInForm.css';
import url from './url';

const LoginForm = ({ onLogin }) => {
  const [usuario, setusuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url.apiBaseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('userData', JSON.stringify(data));
      setMensaje("Autorizado")
      setusuario('');
      setPassword('');
      onLogin({ usuario, password });
    } else {
      setMensaje("Usuario o contraseña incorrectas")
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="usuario">USUARIO:</label>
          <input
            type="usuario"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={(e) => setusuario(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>{mensaje}</div> 
        <div className="button-group">
          <button type="submit" className="btn">SIGN IN</button>
        </div>
      </form>
      
    </div>
  );
};

export default LoginForm;
