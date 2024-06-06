import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const clientes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Datos de clientes
  const clients = [
    { id: 1, name: 'John Doe', category: 'VIP', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', category: 'Regular', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', category: 'Regular', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', category: 'VIP', email: 'bob@example.com' },
    { id: 5, name: 'Charlie Black', category: 'New', email: 'charlie@example.com' },
    
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography color="blue" variant="h5" gutterBottom>
        CLIENTES
      </Typography>
      <TextField
        label="Buscar por Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NOMBRE</TableCell>
            <TableCell>CATEGORÍA</TableCell>
            <TableCell>EMAIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredClients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.id}</TableCell>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.category}</TableCell>
              <TableCell>{client.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  );
};

export default clientes;
