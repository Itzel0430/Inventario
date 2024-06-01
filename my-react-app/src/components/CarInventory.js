import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const CarInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Datos de autos disponibles y vendidos
  const cars = [
    { id: 1, model: 'Toyota Corolla', status: 'Disponible' },
    { id: 2, model: 'Honda Civic', status: 'Vendido' },
    { id: 3, model: 'Ford Mustang', status: 'Disponible' },
    { id: 4, model: 'Chevrolet Cruze', status: 'Vendido' },
    { id: 5, model: 'Nissan Altima', status: 'Disponible' },
    // Agrega más datos según sea necesario
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCars = cars.filter(car =>
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Inventario de Autos
      </Typography>
      <TextField
        label="Buscar por Modelo"
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
            <TableCell>Modelo</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCars.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.id}</TableCell>
              <TableCell>{car.model}</TableCell>
              <TableCell>{car.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => console.log('Regresar')}
        style={{ marginTop: '20px' }}
      >
        Regresar
      </Button>
    </div>
  );
};

export default CarInventory;


