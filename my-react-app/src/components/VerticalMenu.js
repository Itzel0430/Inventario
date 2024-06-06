import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import CarInventory from './CarInventory';
import Employees from './Employees';
import Sales from './Sales';

const VerticalMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div style={{ width: '200px', textAlign: 'left', position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
        <List component="nav">
          <ListItem button component={Link} to="/sales">
            <ListItemText primary="Ventas" />
          </ListItem>
          <ListItem button component={Link} to="/employees">
            <ListItemText primary="Empleados" />
          </ListItem>
          <ListItem button component={Link} to="/inventory">
            <ListItemText primary="Inventario" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Sucursales" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="Sucursal 1" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="Sucursal 2" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="Sucursal 3" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="Sucursal 4" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="Sucursal 5" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>

      <Routes>
        <Route path="/sales" element={<Sales />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/inventory" element={<CarInventory />} />
      </Routes>
    </Router>
  );
};

export default VerticalMenu;
