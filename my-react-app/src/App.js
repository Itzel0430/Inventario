import React from 'react';
import './App.css';
import CarInventory from './components/CarInventory';
import Menu from './components/Menu';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <div className="main-content">
        {}
      </div>
      
     <CarInventory />
      
      
    </div>
  );
};

export default App;
