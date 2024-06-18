import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import url from './url';

const CarInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${url.apiBaseUrl}/autos`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos de autos');
        }

        const data = await response.json();
        setCars(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCars();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCars = cars.filter(car =>
    car.modelo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography color="blue" variant="h5" gutterBottom>
        CATALAGO DE AUTOS 
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
            <TableCell>MARCA</TableCell>
            <TableCell>MODELO</TableCell>
            <TableCell>TRASMISION</TableCell>
            <TableCell>COLOR</TableCell>
            <TableCell>AÑO</TableCell>
            <TableCell>PRECIO</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCars.map((car, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell> {/* Using index as ID since the table doesn't have an ID */}
              <TableCell>{car.marca}</TableCell>
              <TableCell>{car.modelo}</TableCell>
              <TableCell>{car.transmision}</TableCell>
              <TableCell>{car.color}</TableCell>
              <TableCell>{car.year}</TableCell>
              <TableCell>{car.precio}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CarInventory;
