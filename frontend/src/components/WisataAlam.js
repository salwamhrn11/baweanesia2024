import React, { useState } from "react";
import '../App.css';
import './WisataAlam.css';

// Import gambar lokal
import PantaiTanjungGaang from '../images/pantai-tanjung-gaang.jpg';
import AirTerjunLaccar from '../images/air-terjun-laccar.jpeg';
import PulauNoko from '../images/pulau-noko.jpeg';
import PantaiMayangkara from '../images/mayangkara.jpeg';
import PantaiLabuhan from '../images/labuhan.jpg';
import PantaiSelayar from '../images/selayar.png';  
import PulauCina from '../images/pulauCina.jpg';
import DanauKastoba from '../images/danauKastoba.jpg';
import HutanMangrove from '../images/mangrove.jpg';
import PantaiMombhul from '../images/mombhul.jpg';


function WisataAlam() {
    const wisataData = [
        {
            id: 1,
            name: "Pantai Tanjung Gaang",
            location: "Kumalasa, Sangkapura",
            label: "Pantai",
            link: PantaiTanjungGaang,
            description: "Sebuah objek wisata yang memiliki bukit batu karang yang unik dan indah. Tanjung Gaang menonjol di tengah laut, sehingga kita dapat melihat deretan pulau lain di sekitarnya. Selain itu, pengunjung dapat melihat air laut yang jernih serta menikmati keindahan batu-batu karang dengan menyewa perahu nelayan.",
            mapsLink: "https://www.google.com/maps?q=Pantai+Tanjung+Gaang,Bawean&output=embed"
        },
        {
            id: 2,
            name: "Air Terjun Laccar",
            location: "Kebontelukdalam, Sangkapura",
            label: "Air Terjun",
            link: AirTerjunLaccar,
            description: "Air Terjun Laccar terletak di Desa Kepuh Teluk Dalam, Sangkapura, Bawean, dengan tinggi 25 meter dan tebing yang artistik. Daya tariknya menarik banyak pengunjung yang ingin berenang, berendam, atau menikmati keindahan alam, sambil mendengarkan suara air yang menenangkan dan merasakan kesegaran udaranya.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6306.089322131591!2d112.69079793724455!3d-5.806371324562587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf56dd35139eb1%3A0x96930a67c87c4b4e!2sLaccar%20Waterfall!5e0!3m2!1sen!2sid!4v1723357256067!5m2!1sen!2sid"
        },
        {
            id: 3,
            name: "Pulau Noko",
            location: "Sidogedungbatu, Sangkapura",
            label: "Pulau",
            link: PulauNoko,
            description: "Gili Noko adalah pantai kecil yang indah dengan pasir putih bersih dan gundukan pasir di tengah laut jernih. Wisatawan dapat menikmati aktivitas seperti snorkeling, menaiki banana boat, atau berenang sepuasnya. Keindahan alamnya menjadikan Gili Noko destinasi favorit untuk bersantai sambil menikmati pemandangan laut yang menakjubkan.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.1606927885714!2d112.76759668157516!3d-5.8037711191551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf51c55f7b8899%3A0xcec2747abae3a31b!2sPantai%20Noko%20Selayar!5e0!3m2!1sen!2sid!4v1723357423241!5m2!1sen!2sid"
        },
        {
            id: 4,
            name: "Pantai Mayangkara",
            location: "Diponggo, Tambak",
            label: "Pantai",
            link: PantaiMayangkara,
            description: "Pantai Mayangkara di Pulau Bawean menawarkan pasir putih bersih dan air laut yang jernih, dikelilingi perbukitan hijau yang menawan. Pengunjung bisa bersantai, berenang, atau berjalan di tepi pantai sambil menikmati keindahan matahari terbit dan terbenam yang spektakuler. Tempat ini ideal untuk menikmati suasana alam yang tenang dan menyegarkan.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41929.24651847918!2d112.68961200565357!3d-5.737156728482997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf5a21caa76a6f%3A0xa23f23679081d593!2sPantai%20Mayangkara!5e0!3m2!1sen!2sid!4v1723892235537!5m2!1sen!2sid"
        },
        {
            id: 5,
            name: "Pantai Labuhan",
            location: "Tanjungori, Tambak",
            label: "Pantai",
            link: PantaiLabuhan,
            description: "Pantai Labuhan di Pulau Bawean memiliki pasir putih halus dan air laut biru jernih, dikelilingi pohon kelapa dan bukit hijau. Pengunjung dapat berenang, bersantai, atau menjelajahi pesisir sambil menikmati pemandangan matahari terbenam yang memukau, menjadikannya tempat ideal untuk relaksasi dan menikmati keindahan alam yang menenangkan.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27588.18181777421!2d112.64202006727403!3d-5.73237675688687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf590fabee5cdd%3A0xb1d08be102903de9!2sPantai%20Labuhan!5e0!3m2!1sen!2sid!4v1723893340451!5m2!1sen!2sid"
        },
        {
            id: 6,
            name: "Pantai Selayar",
            location: "Sidogedungbatu, Sangkapura",
            label: "Pantai",
            link: PantaiSelayar,
            description: "Pantai Selayar di Pulau Bawean adalah destinasi indah dengan pasir putih lembut dan air laut biru jernih. Dikelilingi pemandangan bukit hijau dan hutan tropis, pantai ini menawarkan suasana tenang. Pengunjung dapat berenang, bersantai di bawah pohon kelapa, atau menikmati pemandangan matahari terbit dan terbenam yang memukau serta suasana damai.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64753.35946198919!2d112.66397612185413!3d-5.845620897089787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf5438b7723685%3A0x41f813f7bb4dc07b!2sPantai%20Selayar!5e0!3m2!1sen!2sid!4v1723893400087!5m2!1sen!2sid"
        },
        {
            id: 7,
            name: "Pulau Cina",
            location: "Jatidawang, Sangkapura",
            label: "Pulau",
            link: PulauCina,
            description: "Pulau Cina di Pulau Bawean menawarkan pesona alam menakjubkan dengan pantai berpasir putih dan air laut biru jernih. Dikelilingi terumbu karang, pulau ini ideal untuk snorkeling dan menyelam. Suasana tenang dan pemandangan alami memukau membuatnya tempat sempurna untuk bersantai serta menikmati matahari terbit dan terbenam yang spektakuler.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31756.707495358012!2d112.57554583413933!3d-5.772200845472647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e75f9d49abc6571%3A0xde00a098181b693a!2sPulau%20Cina!5e0!3m2!1sen!2sid!4v1723893463678!5m2!1sen!2sid"
        },
        {
            id: 8,
            name: "Danau Kastoba",
            location: "Paromaan, Sangkapura",
            label: "Danau",
            link: DanauKastoba,
            description: "Danau Kastoba di Pulau Bawean adalah danau yang indah dengan air yang tenang dan dikelilingi pemandangan pegunungan hijau. Dengan suasana yang damai, danau ini cocok untuk bersantai, memancing, atau menikmati keindahan alam. Airnya yang jernih dan latar belakang alam yang mempesona menjadikannya tempat ideal untuk bersantai sambil menikmati keindahan alam Pulau Bawean.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44406.81757091534!2d112.63111189421902!3d-5.775952183477849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf5782884529d1%3A0x531f27e74825c370!2sDanau%20Kastoba%20Bawean!5e0!3m2!1sen!2sid!4v1723893532683!5m2!1sen!2sid"
        },
        {
            id: 9,
            name: "Hutan Mangrove",
            location: "Daun, Sangkapura",
            label: "Hutan",
            link: HutanMangrove,
            description: "Hutan Mangrove di Pulau Bawean adalah ekosistem unik dengan pepohonan mangrove rimbun dan akar menjulang. Terletak di tepi pantai, hutan ini menawarkan pemandangan menyejukkan dan merupakan habitat bagi berbagai spesies burung dan ikan. Pengunjung dapat menjelajahi jalur setapak, naik kano, dan menikmati suasana damai sambil belajar tentang ekosistem mangrove yang vital.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14930.528217893512!2d112.69430610894531!3d-5.846016053082481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf540f75b57b65%3A0x93715622f7e3c833!2sWisata%20Mangrove%20Hijau%20Daun!5e0!3m2!1sen!2sid!4v1723893598267!5m2!1sen!2sid"
        },
        {
            id: 10,
            name: "Pantai Mombhul",
            location: "Sidogedungbatu, Sangkapura",
            label: "Hutan",
            link: PantaiMombhul,
            description: "Pantai Mombhul di Pulau Bawean menawarkan keindahan alam dengan pasir putih lembut dan air laut biru jernih. Selain keindahan pantainya, pengunjung juga dapat menemukan spesies rusa Bawean yang langka di sekitar area. Pantai ini ideal untuk berenang, bersantai, atau menjelajahi lingkungan sambil menikmati pemandangan dan kehidupan liar yang khas.",
            mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14932.06536165176!2d112.72598783828771!3d-5.788118219453398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf51fae2e10ed9%3A0x762bd7850ee23fdb!2sMombhul%20Beach%20Bawean!5e0!3m2!1sen!2sid!4v1723893716494!5m2!1sen!2sid"
        }
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