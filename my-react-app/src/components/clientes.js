import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import url from './url';

const Clientes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(`${url.apiBaseUrl}/clientes`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos de clientes');
        }

        const data = await response.json();
        setClients(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchClients();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredClients = clients.filter(client =>
    client.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

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
            <TableCell>APELLIDO</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>SEXO</TableCell>
            <TableCell>EDAD</TableCell>
            <TableCell>TELEFONO</TableCell>
            <TableCell>DIRECCION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredClients.map((client, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell> {/* Using index as ID since the table doesn't have an ID */}
              <TableCell>{client.nombre}</TableCell>
              <TableCell>{client.apellido}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.sexo}</TableCell>
              <TableCell>{client.edad}</TableCell>
              <TableCell>{client.telefono}</TableCell>
              <TableCell>{client.direccion}</TableCell>



            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Clientes;
