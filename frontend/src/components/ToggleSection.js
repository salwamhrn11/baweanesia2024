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
        name: "Warung Mbak Erin",
        location: "Dusun Carabaka",
        label: "UMKM",
        link: Kedai,
        description: "082138345696",
        mapsLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3969.4879306315784!2d112.73493400000001!3d-5.786534000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDcnMTEuNSJTIDExMsKwNDQnMDUuOCJF!5e0!3m2!1sen!2sid!4v1723848866535!5m2!1sen!2sid"
    },
    {
        id: 2,
        name: "Warung Hanum",
        location: "Dusun Carabaka",
        label: "UMKM",
        link: Kedai,
        description: "082138345696",
        mapsLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3969.486343895421!2d112.73504799999999!3d-5.786759999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDcnMTIuMyJTIDExMsKwNDQnMDYuMiJF!5e0!3m2!1sen!2sid!4v1723849235249!5m2!1sen!2sid"
    },
    {
        id: 3,
        name: "Warung Noa",
        location: "Dusun Carabaka",
        label: "UMKM",
        link: Kedai,
        description: "082138345696",
        mapsLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3969.4857751829145!2d112.735118!3d-5.786841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDcnMTIuNiJTIDExMsKwNDQnMDYuNCJF!5e0!3m2!1sen!2sid!4v1723849159650!5m2!1sen!2sid"
    },
    {
        id: 4,
        name: "Toko Kelontong Pak Ending",
        location: "Dusun Carabaka",
        label: "UMKM",
        link: Kedai,
        description: "082138345696",
        mapsLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3969.4736548060882!2d112.72698299999999!3d-5.788567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDcnMTguOCJTIDExMsKwNDMnMzcuMSJF!5e0!3m2!1sen!2sid!4v1723849111289!5m2!1sen!2sid"
    },
    {
      id: 5,
      name: "Warung Bu Natijah",
      location: "Dusun Carabaka",
      label: "UMKM",
      link: Kedai,
      description: "082138345696",
      mapsLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3969.4737812248973!2d112.727702!3d-5.788549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDcnMTguOCJTIDExMsKwNDMnMzkuNyJF!5e0!3m2!1sen!2sid!4v1723848588292!5m2!1sen!2sid"
    },
    {
      id: 6,
      name: "Toko Kelontong Vian",
      location: "Dusun Carabaka",
      label: "UMKM",
      link: Kedai,
      description: "082138345696",
      mapsLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1126.6742634469751!2d112.73011576722676!3d-5.787740449676112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf51005547578b%3A0x68b92c7b937862e!2sToko%20Kelontong%20Carabaka!5e0!3m2!1sen!2sid!4v1723848225923!5m2!1sen!2sid"
    },
    {
      id: 7,
      name: "Warung Bakso Benggol",
      location: "Dusun Carabaka",
      label: "UMKM",
      link: Kedai,
      description: "082138345696",
      mapsLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3969.485157313422!2d112.73521!3d-5.786928999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDcnMTIuOSJTIDExMsKwNDQnMDYuOCJF!5e0!3m2!1sen!2sid!4v1723848813625!5m2!1sen!2sid"
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
      <p style={{ marginRight: '10px' }}>Kepuhlegundi</p>
        <button onClick={toggleVisibility}>
          {isVisible ? '▲' : '▼'}
        </button>
      </div>
      {isVisible && (
        <div className="content-section">

          {/* <div className="card-section">
              <div className="cards-container">
                {cards.map(card => (
                  <div className="card" key={card.id}>
                    <img src={card.image} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
          </div> */}

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
