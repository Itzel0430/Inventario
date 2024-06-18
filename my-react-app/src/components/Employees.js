import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import url from './url';
const Employees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const sucursal = userData ? userData.nombre_sucursal : '';

        if (!sucursal) {
          throw new Error('Sucursal no especificada en el localStorage');
        }

        const response = await fetch(`${url.apiBaseUrl}/empleados?sucursal=${sucursal}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos de empleados');
        }

        const data = await response.json();
        setEmployees(data);
        console.log(data);

      } catch (error) {
        setError(error.message);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter(emp =>
    (emp.nombre && emp.nombre.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (emp.apellido && emp.apellido.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories = [...new Set(employees.map(emp => emp.puesto))];

  if (error) {
    return <div>Error: {error}</div>;
  }

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
                <TableCell>NOMBRE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees
                .filter(emp => emp.puesto === category)
                .map(emp => (
                  <TableRow key={emp.usuario}>
                    <TableCell>{emp.usuario}</TableCell>
                    <TableCell>{`${emp.nombre} ${emp.apellido}`}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default Employees;
