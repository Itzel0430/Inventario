import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CarInventory from './CarInventory';
import Employees from './Employees';
import Sales from './Sales';
import Clientes from './Clientes'; 

const VerticalMenu = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Router>
      <div style={{ width: '200px', textAlign: 'left', position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
        <List component="nav">
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
          <ListItem button onClick={handleClick}>
            <ListItemText primary="SUCURSALES" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: '30px' }} onClick={() => handleOptionClick('sucursal1')}>
                <ListItemText primary="SUCURSAL 1" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }} onClick={() => handleOptionClick('sucursal2')}>
                <ListItemText primary="SUCURSAL 2" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }} onClick={() => handleOptionClick('sucursal3')}>
                <ListItemText primary="SUCURSAL 3" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }} onClick={() => handleOptionClick('sucursal4')}>
                <ListItemText primary="SUCURSAL 4" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }} onClick={() => handleOptionClick('sucursal5')}>
                <ListItemText primary="SUCURSAL 5" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>

      <Routes>
        {selectedOption === 'sales' && <Route path="/sales" element={<Sales />} />}
        {selectedOption === 'employees' && <Route path="/employees" element={<Employees />} />}
        {selectedOption === 'inventory' && <Route path="/inventory" element={<CarInventory />} />}
        {selectedOption === 'clientes' && <Route path="/clientes" element={<Clientes />} />}
      </Routes>
    </Router>
  );
};

export default VerticalMenu;
