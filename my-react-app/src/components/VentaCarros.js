import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Typography } from '@mui/material';
import url from './url';
const VentaCarros = () => {
  const [cars, setCars] = useState([]);
  const [clients, setClients] = useState([]);
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [formData, setFormData] = useState({
    Fecha: '',
    Marca: '',
    Modelo: '',
    Year: '',
    Nombre_cliente: '',
    Apellido_cliente: '',
    Email_cliente: '',
    Nombre_empleado: '',
    Apellido_empleado: '',
    Sucursal: '',
    Precio_venta: ''
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${url.apiBaseUrl}/autos`);
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    const fetchClients = async () => {
      try {
        const response = await fetch(`${url.apiBaseUrl}/clientes`);
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchCars();
    fetchClients();

    // Obtener datos del vendedor desde el localStorage
    const vendedor = JSON.parse(localStorage.getItem('userData'));
    setFormData(prevState => ({
      ...prevState,
      Nombre_empleado: vendedor?.nombre || '',
      Apellido_empleado: vendedor?.apellido || '',
      Sucursal: vendedor?.nombre_sucursal || ''
    }));
  }, []);

  const handleCarChange = (event) => {
    const selectedCar = cars.find(car => car.id === event.target.value);
    setSelectedCar(event.target.value);
    setFormData(prevState => ({
      ...prevState,
      Marca: selectedCar?.marca || '',
      Modelo: selectedCar?.modelo || '',
      Year: selectedCar?.year || ''
    }));
  };

  const handleClientChange = (event) => {
    const selectedClient = clients.find(client => client.email === event.target.value);
    console.log(selectedClient);
    setSelectedClient(event.target.value);
    setFormData(prevState => ({
      ...prevState,
      Nombre_cliente: selectedClient?.nombre || '',
      Apellido_cliente: selectedClient?.apellido || '',
      Email_cliente: selectedClient?.email || ''
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(`${url.apiBaseUrl}/ventascarros`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Venta realizada con éxito');
        setFormData({
          Fecha: '',
          Marca: '',
          Modelo: '',
          Year: '',
          Nombre_cliente: '',
          Apellido_cliente: '',
          Email_cliente: '',
          Nombre_empleado: '',
          Apellido_empleado: '',
          Sucursal: '',
          Precio_venta: ''
        });
        setSelectedCar('');
        setSelectedClient('');
      } else {
        alert('Error al realizar la venta');
      }
    } catch (error) {
      console.error('Error submitting the sale:', error);
      alert('Error al realizar la venta');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography color="blue" variant="h5" gutterBottom>
        Vender Carro
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="date"
          label="Fecha"
          name="Fecha"
          value={formData.Fecha}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          select
          label="Seleccionar Carro"
          value={selectedCar}
          onChange={handleCarChange}
          fullWidth
          margin="normal"
        >
          {cars.map((car) => (
            <MenuItem key={car.id} value={car.id}>
              {car.marca} - {car.modelo} ({car.year})
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Seleccionar Cliente"
          value={selectedClient}
          onChange={handleClientChange}
          fullWidth
          margin="normal"
        >
          {clients.map((client) => (
            <MenuItem key={client.email} value={client.email}>
              {client.nombre} {client.apellido} - {client.email}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Precio de Venta"
          name="Precio_venta"
          value={formData.Precio_venta}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Sucursal"
          name="Sucursal"
          value={formData.Sucursal}
          onChange={handleChange}
          fullWidth
          margin="normal"
          disabled
        />
        <Button type="submit" variant="contained" color="primary">
          Realizar Venta
        </Button>
      </form>
    </div>
  );
};

export default VentaCarros;
