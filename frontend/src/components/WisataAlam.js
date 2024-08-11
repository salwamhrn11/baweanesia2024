import React, { useState } from "react";
import '../App.css';
import './WisataAlam.css';

// Import gambar lokal
import PantaiTanjungGaang from '../images/pantai-tanjung-gaang.jpg';
import AirTerjunLaccar from '../images/air-terjun-laccar.jpeg';
import PulauNoko from '../images/pulau-noko.jpeg';

function WisataAlam() {
    const wisataData = [
        {
            id: 1,
            name: "Pantai Tanjung Gaang",
            location: "Bawean",
            label: "Pantai",
            link: PantaiTanjungGaang,
            description: "Pantai Tanjung Gaang adalah pantai yang terkenal dengan keindahan batu karangnya. Sebuah objek wisata yang memiliki bukit batu karang yang unik dan indah. Tanjung Gaang menonjol di tengah laut, sehingga kita dapat melihat deretan pulau lain di sekitarnya. Selain itu, pengunjung dapat melihat air laut yang jernih serta menikmati keindahan batu-batu karang dengan menyewa perahu nelayan.",
            mapsLink: "https://www.google.com/maps?q=Pantai+Tanjung+Gaang,Bawean&output=embed"
        },
        {
            id: 2,
            name: "Air Terjun Laccar",
            location: "Bawean",
            label: "Air Terjun",
            link: AirTerjunLaccar,
            description: "Air Terjun Laccar memiliki tinggi 25 meter yang terletak di Desa Kepuh Teluk Dalam, Sangkapura. Dengan ketinggian tersebut dan latar belakang tebing yang artistik, air terjun ini menjadi daya tarik para pengunjung. Pengunjung dapat berenang dan berendam pada air terjun ini.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6306.089322131591!2d112.69079793724455!3d-5.806371324562587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf56dd35139eb1%3A0x96930a67c87c4b4e!2sLaccar%20Waterfall!5e0!3m2!1sen!2sid!4v1723357256067!5m2!1sen!2sid"
        },
        {
            id: 3,
            name: "Pulau Noko",
            location: "Bawean",
            label: "Pulau",
            link: PulauNoko,
            description: "Sebuah pantai kecil dengan pasir putih bersih dan gundukan pasir yang memanjang di tengah laut yang begitu jernih. Wisatawan dapat melakukan snorkeling, menaiki banana boat, dan berenang sepuasnya sembari menikmati keindahan Gili Noko.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.1606927885714!2d112.76759668157516!3d-5.8037711191551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf51c55f7b8899%3A0xcec2747abae3a31b!2sPantai%20Noko%20Selayar!5e0!3m2!1sen!2sid!4v1723357423241!5m2!1sen!2sid"
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
        <div className='wisata-container'>
            <h1>Wisata Pulau Bawean!</h1>
            <div className='wisata-card-container'>
                {wisataData.map((props) => (
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
                                <h2>{selectedCard.name}</h2>
                                <p>{selectedCard.description}</p>
                            </div>
                        </div>
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
    );
}

export default WisataAlam;