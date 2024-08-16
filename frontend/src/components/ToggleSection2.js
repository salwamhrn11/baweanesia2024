import React, { useState } from 'react';
import '../App.css';
import './ToggleSection.css';

import Kedai from '../images/Kedai.jpeg';

const ToggleSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const produkData = [
    {
        id: 1,
        name: "-",
        location: "-",
        label: "UMKM",
        link: Kedai,
        description: "-",
        mapsLink: ""
    },
    {
      id: 2,
      name: "-",
      location: "-",
      label: "UMKM",
      link: Kedai,
      description: "-",
      mapsLink: ""
    },
    {
      id: 3,
      name: "-",
      location: "-",
      label: "UMKM",
      link: Kedai,
      description: "-",
      mapsLink: ""
    },
    {
      id: 4,
      name: "-",
      location: "-",
      label: "UMKM",
      link: Kedai,
      description: "-",
      mapsLink: ""
    },
];

const [isOpen, setIsOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState(null);

const togglePopup = (card) => {
    console.log("Card clicked:", card); // Debugging log
    setIsOpen(!isOpen);
    setSelectedCard(card);
};

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8%' }}>
      <p style={{ marginRight: '10px' }}>Kepuhteluk</p>
        <button onClick={toggleVisibility}>
          {isVisible ? '▲' : '▼'}
        </button>
      </div>
      {isVisible && (
        <div className="content-section">

        <div className='wisata-container'>
        <div className='wisata-card-container'>
            {produkData.map((props) => (
                <div
                    key={props.id}
                    className='wisata-card-link'
                    onClick={() => togglePopup(props)}
                >
                    <figure className='wisata-card-pic-wrap' data-category={props.label}>
                        <img
                            className='wisata-card-img'
                            alt={props.label}
                            src={props.link}
                        />
                    </figure>
                    <div className='wisata-card-info'>
                        <h5 className='wisata-card-name'>{props.name}</h5>
                        <h6 className='wisata-card-location'>{props.location}</h6>
                    </div>
                </div>
            ))}

            {isOpen && selectedCard && (
                <div className='popup' onClick={() => togglePopup(null)}>
                    <div className='popup-inner' onClick={(e) => e.stopPropagation()}>
                        <img className='popup-image' src={selectedCard.link} alt={selectedCard.name} />
                        <div className='popup-description'>
                            <h2 className='popup-title'>{selectedCard.name}</h2>
                            {/* <p className='popup-text'>{selectedCard.description}</p> */}
                        </div>
                    </div>
                    <p>Nomor HP: 082138345696</p>
                    <div className='gmaps-container'>
                        <iframe
                            src={selectedCard.mapsLink}
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        ></iframe>
                    </div>
                    <button onClick={() => togglePopup(null)}>Close</button>
                </div>
            )}
        </div>
    </div>

        </div>
      )}
      <br></br>
    </div>
  );
};

export default ToggleSection;
