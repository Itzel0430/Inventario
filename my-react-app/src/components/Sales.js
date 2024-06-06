import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

const Sales = () => {
  // Datos de ventas ampliados
  const salesData = [
    { id: 1, carId: 101, date: '2024-05-15', model: 'Toyota Corolla', customer: 'Alice Johnson', employee: 'John Doe', branch: 'Sucursal A', price: 25000, status: 'Completada' },
    { id: 2, carId: 102, date: '2024-05-16', model: 'Honda Civic', customer: 'Bob Brown', employee: 'Jane Smith', branch: 'Sucursal B', price: 28000, status: 'Completada' },
    { id: 3, carId: 103, date: '2024-05-17', model: 'Ford Mustang', customer: 'Charlie Black', employee: 'Alice Johnson', branch: 'Sucursal C', price: 35000, status: 'En Proceso' },
    { id: 4, carId: 104, date: '2024-05-18', model: 'Chevrolet Cruze', customer: 'David White', employee: 'Bob Brown', branch: 'Sucursal A', price: 22000, status: 'Completada' },
    { id: 5, carId: 105, date: '2024-05-19', model: 'Nissan Altima', customer: 'Emma Green', employee: 'Charlie Black', branch: 'Sucursal B', price: 30000, status: 'En Proceso' },
    // Agrega más datos según sea necesario
  ];

  const handleBack = () => {
    // Aquí puedes definir la lógica para regresar a la página anterior o realizar alguna acción específica
    console.log('Botón de regresar presionado');
  };

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
            <TableCell>MODELO</TableCell>
            <TableCell>CLIENTE</TableCell>
            <TableCell>EMPLEADO</TableCell>
            <TableCell>SUCURSAL</TableCell>
            <TableCell>PRECIO</TableCell>
            <TableCell>ESTADO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {salesData.map((sale) => (
            <TableRow key={sale.id}>
              <TableCell>{sale.carId}</TableCell>
              <TableCell>{sale.date}</TableCell>
              <TableCell>{sale.model}</TableCell>
              <TableCell>{sale.customer}</TableCell>
              <TableCell>{sale.employee}</TableCell>
              <TableCell>{sale.branch}</TableCell>
              <TableCell>{`$ ${sale.price}`}</TableCell>
              <TableCell>{sale.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  );
};

export default Sales;

