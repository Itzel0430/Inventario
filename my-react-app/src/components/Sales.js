import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import url from './url';

const Sales = () => {
  const [sale, setSale] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const sucursal = userData ? userData.nombre_sucursal : '';

        if (!sucursal) {
          throw new Error('Sucursal no especificada en el localStorage');
        }

        const response = await fetch(`${url.apiBaseUrl}/ventas?sucursal=${sucursal}`);

        if (!response.ok) {
          throw new Error('Error al obtener los datos de ventas');
        }

        const data = await response.json();
        console.log(data);
        setSale(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSalesData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <br></br>
      <Typography color="blue" variant="h5" gutterBottom>
        VENTAS
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>FECHA DE VENTA</TableCell>
            <TableCell>MARCA</TableCell>
            <TableCell>MODELO</TableCell>
            <TableCell>YEAR</TableCell>
            <TableCell>CLIENTE</TableCell>
            <TableCell>EMPLEADO</TableCell>
            <TableCell>SUCURSAL</TableCell>
            <TableCell>PRECIO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sale.map((sale, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{sale.fecha}</TableCell>
              <TableCell>{sale.marca}</TableCell>
              <TableCell>{sale.modelo}</TableCell>
              <TableCell>{sale.year}</TableCell>
              <TableCell>{`${sale.nombre_cliente} ${sale.apellido_cliente}`}</TableCell>
              <TableCell>{`${sale.nombre_empleado} ${sale.apellido_empleado}`}</TableCell>
              <TableCell>{sale.sucursal}</TableCell>
              <TableCell>{`$ ${sale.precio_venta}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Sales;
