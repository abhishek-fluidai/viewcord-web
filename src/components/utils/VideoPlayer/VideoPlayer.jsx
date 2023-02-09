import React, { useEffect, useRef, useState } from "react"
import "./VideoPlayer.css";
import shaka from 'shaka-player/dist/shaka-player.ui';

function Player({ src, config, chromeless, className, ...rest }) {
  const uiContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [ui, setUi] = useState(null);

  // Effect to handle component mount & mount.
  // Not related to the src prop, this hook creates a shaka.Player instance.
  // This should always be the first effect to run.
  useEffect(() => {
    const player = new shaka.Player(videoRef.current);
    setPlayer(player);
    let ui;
    if (!chromeless) {
      const ui = new shaka.ui.Overlay(
        player,
        uiContainerRef.current,
        videoRef.current
      );
      const config = {
        'seekBarColors': {
          base: 'rgba(255, 255, 255, 0.3)',
          buffered: 'rgba(255, 255, 255, 0.54)',
          played: 'rgb(255, 255, 255)',
        }
       }
       ui.configure(config);
      setUi(ui);

    }

 

    // install polyfills
    shaka.polyfill.installAll();

    player.configure({
      abr: {
        enabled: false
      },
    });

    videoRef?.current?.addEventListener('ended', (event) => {
      console.log('ended');
      // window.location.reload();
    });


    return () => {
      player.destroy();
      if (ui) {
        ui.destroy();
      }
    };
  }, []);




  // Keep shaka.Player.configure in sync.
  // useEffect(() => {
  //   if (player && config) {
  //     player.configure(config);
  //   }
  // }, [player, config]);

  // Load the source url when we have one.
  const loadVideo = async (uri) => {
    try {
        await player.load(uri, 0, 'application/dash+xml');
        player.selectVariantTrack(player.getVariantTracks()[4], true);
    } catch (error) {
      console.error(error);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (player && src) {
      loadVideo(src);
    }
  }, [player, src]);



  return (
    <div ref={uiContainerRef} className="youtube-theme"  >
      <div className="player-loading-overlay" style={{display: (src && "none")}}>  </div>
      <video
        ref={videoRef}
        autoPlay
        onCanPlay={() => {
          videoRef.current.play();
          console.log("can play")
        }
        }
        style={{
          maxWidth: '100%',
          width: '100%'
        }}
        {...rest}
      />
    </div>
  );
}

export default Player