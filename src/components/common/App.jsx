// setup shaka player react with functional component
import React, { useCallback, useEffect, useRef } from 'react';
import ShakaPlayer from 'shaka-player-react';
import dash from './DashUtils'
import './App.css';
import 'shaka-player/dist/controls.css';

const App = () => {
  const videoRef = useRef(null);
 const [uriData, setUriData] = React.useState(null)
 const [playerLoaded, setPlayerLoaded] = React.useState(false)

  useEffect(() => {  
  
 
  const FetchVideoURL = async () => {
    const response = await fetch('https://pipedapi.kavin.rocks/streams/7Dg2T3ULeYY')
    const data = await response.json()
    const player = videoRef?.current?.player

    const {videoStreams, audioStreams, duration } = data
      // console.log(videoStreams, audioStreams, duration)
      // setRawData([...videoStreams, ...audioStreams])

     genrateDash([...videoStreams, ...audioStreams],player)
     
  }


  const genrateDash = async  (raw,player) => {
    const genratedFile = dash.generate_dash_file_from_formats(raw)
    player?.load('data:text/xml;charset=utf-8,' + encodeURIComponent(genratedFile), 0, 'application/dash+xml')
  }


  if (document.readyState === 'complete') {
    FetchVideoURL()

  } else {
    window.addEventListener('load', FetchVideoURL);
    // Remove the event listener when component unmounts
    return () => window.removeEventListener('load', FetchVideoURL);
  }


  },[ videoRef.current, playerLoaded]);
  

  return (
    <div className="youtube-theme">
      {/* {uriData && */}
      <ShakaPlayer
        autoPlay
        crossOrigin="anonymous"
        ref={videoRef}
      />
      {/* } */}
    </div>
  );
}

export default App;
