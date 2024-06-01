import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';

const VerticalMenu = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ['Ventas', 'Empleados', 'Inventario','Clientes'];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div style={{ width: '200px', textAlign: 'left', position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
      <List component="nav">
        {menuItems.map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
  );
};

export default VerticalMenu;
