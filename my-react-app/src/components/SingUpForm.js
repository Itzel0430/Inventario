import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); 
  const [isSuccess, setIsSuccess] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ name, email, password, role });
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
    setIsSuccess(true); 
  };

  return (
    
    <div className="signup-form" >
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
          <label htmlFor="password" className="form-label">PASSWORD:</label>
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
        <div className="form-group">
          <label htmlFor="role" className="form-label">CARGO</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="input-field"
            required
          >
            <option value="">CARGO</option>
            <option value="administrador">ADMINISTRADOR</option>
            <option value="vendedor">VENDEDOR</option>
          </select>
        </div>
        <div className="button-group">
          <button type="submit" className="btn">SIGN UP</button>
        </div>
      </form>
      {isSuccess && (
        <div className="success-message">
          Registro Exitoso
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
