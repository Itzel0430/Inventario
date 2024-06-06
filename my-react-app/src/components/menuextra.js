import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CarInventory from './CarInventory';


const VerticalMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div style={{ width: '200px', textAlign: 'left', position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
        <List component="nav">
          
          
          <ListItem button component={Link} to="/inventory">
            <ListItemText primary="CATALOGO" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="SUCURSALES" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="SUCURSAL 1" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="SUCURSAL 2" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="SUCURSAL 3" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="SUCURSAL 4" />
              </ListItem>
              <ListItem button style={{ paddingLeft: '30px' }}>
                <ListItemText primary="SUCURSAL 5" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>

      <Routes>
        
        <Route path="/inventory" element={<CarInventory />} />
      </Routes>
    </Router>
  );
};

export default VerticalMenu;
