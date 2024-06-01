import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const employees = [
    { id: 1, name: 'John Doe', category: 'Manager' },
    { id: 2, name: 'Jane Smith', category: 'Ventas' },
    { id: 3, name: 'Alice Johnson', category: 'Ventas' },
    { id: 4, name: 'Bob Brown', category: 'Marketing' },
    { id: 5, name: 'Charlie Black', category: 'Marketing' },
    { id: 3, name: 'Anee Klein', category: 'Ventas' },
    { id: 4, name: 'Charles Fox', category: 'Marketing' },
    { id: 5, name: 'Clare Dengler', category: 'Marketing' },

  ];

  const categories = [...new Set(employees.map(emp => emp.category))];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <TextField
        label="Buscar Empleado"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {categories.map((category, index) => (
        <div key={index} style={{ marginTop: '20px' }}>
          <Typography variant="h6">{category}</Typography>
          <Table style={{ marginBottom: '20px' }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees
                .filter(emp => emp.category === category)
                .map(emp => (
                  <TableRow key={emp.id}>
                    <TableCell>{emp.id}</TableCell>
                    <TableCell>{emp.name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={() => console.log('Regresar')}>
        Regresar
      </Button>
    </div>
  );
};

export default Employees;
