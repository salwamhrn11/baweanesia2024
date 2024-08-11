import React, {useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoBanner.css';

function VideoBanner() {
  // const [getTexts, setText] = useState([{}]);
  // const [getVideo, setVideo] = useState([{}]);

  const fetchData = () => {
    // const API ='https://intense-peak-53882.herokuapp.com/videobanner'
    // const getText = Axios.get(API)
    // const getVid = Axios.get(API)
    // Axios.all([getText, getVid]).then(
    //     Axios.spread((...allData) => {
    //         const allDataText = allData[0].data
    //         const allDataVid = allData[1].data.video;

    //         setText(allDataText)
    //         setVideo(allDataVid)
    //         console.log(allDataText)
    //         console.log(allDataVid)
    //     })
    // )
}

    useEffect(() =>{
      fetchData()
    }, []);

    return (
      <div>
            <div className='hero-container'>
              <video src={`Waves splashing onto a rocky shore in the distance.mp4`} autoPlay loop muted />
                <h1>Bawean Island</h1>
                <p>The Hidden Paradise of East Java</p>
              <div className='hero-btns'>
              <Button
                className='btns'
                btnColor='yellow-btn'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
              >
                <a  href='https://storymaps.arcgis.com/stories/991f9363409143de9fc98f873ed3e23b' rel="noreferrer" target='_blank' className='btns'>
                STORY MAP
                </a>
              </Button>
              </div>
            </div>
      </div>
    )
  }

export default VideoBanner;
