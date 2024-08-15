import React, { useState } from 'react';
import '../App.css';
import './ToggleSection.css';

const ToggleSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const cards = [
    { id: 1, title: 'Card 1', image: 'https://via.placeholder.com/150', description: 'Description for card 1' },
    { id: 2, title: 'Card 2', image: 'https://via.placeholder.com/150', description: 'Description for card 2' },
    { id: 3, title: 'Card 3', image: 'https://via.placeholder.com/150', description: 'Description for card 3' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ marginRight: '10px' }}>Kepuhlegundi</p>
        <button onClick={toggleVisibility}>
          {isVisible ? '▲' : '▼'}
        </button>
      </div>
      {isVisible && (
        <div className="content-section">

          <div className="card-section">
              <div className="cards-container">
                {cards.map(card => (
                  <div className="card" key={card.id}>
                    <img src={card.image} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      )}
      <br></br>
    </div>
  );
};

export default ToggleSection;
