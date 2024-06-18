import React, { useState } from 'react';
import './SignUpForm.css';
import url from './url';

const SignUpForm = ({ onSignUp }) => {
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombre_sucursal, setNombre_sucursal] = useState('');
  const [password, setPassword] = useState('');
  const [puesto, setPuesto] = useState(''); 
  const [isSuccess, setIsSuccess] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { nombre, apellido, usuario, nombre_sucursal, password, puesto };
    console.log(newEmployee);
    try {
      const response = await fetch(`${url.apiBaseUrl}/singup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEmployee)
      });
      if (response.ok) {
        console.log("OK");
        setIsSuccess(true)
        setNombre('');
        setApellido('');
        setNombre_sucursal('');
        setUsuario('');
        setPassword('');
        setPuesto('');
      } 
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className="signup-form">
      <h2 className="form-heading">SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido" className="form-label">APELLIDO:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="usuario" className="form-label">USUARIO:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre_sucursal" className="form-label">NOMBRE SUCURSAL:</label>
          <input
            type="text"
            id="nombre_sucursal"
            name="nombre_sucursal"
            value={nombre_sucursal}
            onChange={(e) => setNombre_sucursal(e.target.value)}
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
          <label htmlFor="puesto" className="form-label">PUESTO:</label>
          <select
            id="puesto"
            name="puesto"
            value={puesto}
            onChange={(e) => setPuesto(e.target.value)}
            className="input-field"
            required
          >
            <option value="">Seleccione un puesto</option>
            <option value="Gerente de Ventas">Gerente de Ventas</option>
            <option value="Técnico">Técnico</option>
            <option value="Vendedor">Vendedor</option>
            <option value="Recepcionista">Recepcionista</option>
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
