import React from 'react';
import './Card.css';

const Card = () => {
  const cards = [
    { title: 'Card 1', content: 'This is the first card.' },
    { title: 'Card 2', content: 'This is the second card.' },
    { title: 'Card 3', content: 'This is the third card.' },
    
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
