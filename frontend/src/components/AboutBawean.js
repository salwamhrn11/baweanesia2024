import React from 'react';
import '../App.css';
import './AboutBawean.css';
import PetaBawean from '../images/maps-bawean.png';

const AboutBawean = () => {
  return (
    <div className="about-bawean-content">
      <div className="about-bawean-title">
        <h1 className="about-bawean-reason-title">
          <span className="about-bawean-title-extend">Pulau Bawean</span>
        </h1>
      </div>
      <div className="about-bawean-container">
        <div className="about-bawean-img-column">
          <img src={PetaBawean} alt="Bawean Island" />
        </div>
        <div className="about-bawean-text-column">
          <div className="about-bawean-text-content">
            <h2>
            Pulau Bawean merupakan pulau yang terletak di Laut Jawa, sekitar 135km sebelah utara Kota Gresik. Pulau yang memiliki dua kecamatan, yaitu Kecamatan Sangkapura dan Kecamatan Tambak, merupakan salah satu pulau di Indonesia yang dikenal dengan keindahan alamnya yang memukau. Pulau ini menawarkan pantai yang bersih, air laut yang jernih, dan budaya lokal yang kaya. Pulau ini memiliki spesies rusa yang hanya ditemukan di Bawean, yaitu Axis Kuhli. Terdapat banyak sekali wisata alam yang dapat didatangi ketika ke Pulau Bawean.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBawean;

// import React from 'react';
// import './AboutBawean.css';
// import PetaBawean from '../images/maps-bawean.png';

// const AboutBawean = () => {
//   return (
//     <div className="content">
//       <div className="content-title">
//         <h1 className="reason-title">
//           <span className="title-extend">Pulau Bawean</span>
//         </h1>
//       </div>
//       <div className="content-container">
//         <div className="img-column">
//           <img src={PetaBawean} alt="Bawean Island" />
//         </div>
//         <div className="text-column">
//           <div className="text-content">
//             <h2>
//               Pulau Bawean merupakan pulau yang terletak di Laut Jawa, sekitar 135km sebelah utara Kota Gresik. Pulau yang memiliki dua kecamatan, yaitu Kecamatan Sangkapura dan Kecamatan Tambak, merupakan salah satu pulau di Indonesia yang dikenal dengan keindahan alamnya yang memukau. Pulau ini menawarkan pantai yang bersih, air laut yang jernih, dan budaya lokal yang kaya. Pulau ini memiliki spesies rusa yang hanya ditemukan di Bawean, yaitu Axis Kuhli. Terdapat banyak sekali wisata alam yang dapat didatangi ketika ke Pulau Bawean.
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutBawean;