import React, { useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';
import ImageBanner from '../ImageBanner.js';
import Footer from '../Footer';
import ProdukCards from '../ProdukCards';
import ToggleSection from '../ToggleSection.js';
import ToggleSection2 from '../ToggleSection2.js';


function Produk() {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <>
    <ImageBanner />
    {/* <ProdukCards /> */}
    <br></br>
    <h1 className="centered-text">UMKM</h1>
    <ToggleSection/>  
    <ToggleSection2/>  
    <Footer />
    </>
  );
}

export default Produk;
