import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CarInventory from './CarInventory';
import Employees from './Employees';
import Sales from './Sales';
import Clientes from './clientes';
import VentaCarros from './VentaCarros';

const VerticalMenu = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [puesto, setPuesto] = useState('');

  useEffect(() => {
    // Simula la obtención del puesto desde el localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.puesto) {
      setPuesto(userData.puesto);
    }
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderMenuItems = () => {
    switch (puesto) {
      case 'CEO':
        return (
          <>
            <ListItem button component={Link} to="/sales" onClick={() => handleOptionClick('sales')}>
              <ListItemText primary="VENTAS" />
            </ListItem>
            <ListItem button component={Link} to="/employees" onClick={() => handleOptionClick('employees')}>
              <ListItemText primary="EMPLEADOS" />
            </ListItem>
            <ListItem button component={Link} to="/clientes" onClick={() => handleOptionClick('clientes')}>
              <ListItemText primary="CLIENTES" />
            </ListItem>
            <ListItem button component={Link} to="/inventory" onClick={() => handleOptionClick('inventory')}>
              <ListItemText primary="CATALOGO" />
            </ListItem>
          </>
        );
      case 'Vendedor':
        return (
          <>
            <ListItem button component={Link} to="/sales" onClick={() => handleOptionClick('sales')}>
              <ListItemText primary="VENTAS" />
            </ListItem>
            <ListItem button component={Link} to="/inventory" onClick={() => handleOptionClick('inventory')}>
              <ListItemText primary="CATALOGO" />
            </ListItem>
            <ListItem button component={Link} to="/ventacarros" onClick={() => handleOptionClick('ventacarros')}>
              <ListItemText primary="VENTA CARROS" />
            </ListItem>
          </>
        );
      case 'Gerente de Ventas':
        return (
          <>
            <ListItem button component={Link} to="/sales" onClick={() => handleOptionClick('sales')}>
              <ListItemText primary="VENTAS" />
            </ListItem>
            <ListItem button component={Link} to="/employees" onClick={() => handleOptionClick('employees')}>
              <ListItemText primary="EMPLEADOS" />
            </ListItem>
            <ListItem button component={Link} to="/inventory" onClick={() => handleOptionClick('inventory')}>
              <ListItemText primary="CATALOGO" />
            </ListItem>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Router>
      <div style={{ width: '200px', textAlign: 'left', position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
        <List component="nav">
          {renderMenuItems()}
        </List>
      </div>

      <Routes>
        {selectedOption === 'sales' && <Route path="/sales" element={<Sales />} />}
        {selectedOption === 'employees' && <Route path="/employees" element={<Employees />} />}
        {selectedOption === 'inventory' && <Route path="/inventory" element={<CarInventory />} />}
        {selectedOption === 'clientes' && <Route path="/clientes" element={<Clientes />} />}
        {selectedOption === 'ventacarros' && <Route path="/ventacarros" element={<VentaCarros />} />}

      </Routes>
    </Router>
  );
};

export default VerticalMenu;
