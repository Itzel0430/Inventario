import React from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Carousel from './components/Slider';

function App() {
  return (
    <div className="App">
      <Menu />
     
      <div className="content">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React app with a menu and a dynamic slider.</p>
      </div>
      <Carousel/>
      <br></br>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
