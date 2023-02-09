import React, { useEffect, useRef } from "react"
import dash from "../../common/DashUtils";
import "./VideoPlayer.css";
import "shaka-player/dist/controls.css";
import shaka from 'shaka-player/dist/shaka-player.ui';

function Player({ src, config, chromeless, className, ...rest }) {
  const uiContainerRef = React.useRef(null);
  const videoRef = React.useRef(null);

  const [player, setPlayer] = React.useState(null);
  const [ui, setUi] = React.useState(null);

  // Effect to handle component mount & mount.
  // Not related to the src prop, this hook creates a shaka.Player instance.
  // This should always be the first effect to run.
  React.useEffect(() => {
    const player = new shaka.Player(videoRef.current);
    setPlayer(player);
    let ui;
    if (!chromeless) {
      const ui = new shaka.ui.Overlay(
        player,
        uiContainerRef.current,
        videoRef.current
      );
      setUi(ui);
    }
    // install polyfills
    shaka.polyfill.installAll();
    // check to see if the browser supports the basic APIs Shaka needs.
   

    return () => {
      player.destroy();
      if (ui) {
        ui.destroy();
      }
    };
  }, []);


  // Keep shaka.Player.configure in sync.
  // React.useEffect(() => {
  //   if (player && config) {
  //     player.configure(config);
  //   }
  // }, [player, config]);

  // Load the source url when we have one.
  const loadVideo = async (uri) => {
    try {
        await player.load(uri, 0, 'application/dash+xml');
    } catch (error) {
      console.log(error)
    }
  };

  React.useEffect(() => {
    if (player && src) {
      loadVideo(src);
    }
  }, [player, src]);

  // Define a handle for easily referencing Shaka's player & ui API's.
  // React.useImperativeHandle(
  //   ref,
  //   () => ({
  //     get player() {
  //       return player;
  //     },
  //     get ui() {
  //       return ui;
  //     },
  //     get videoElement() {
  //       return videoRef.current;
  //     }
  //   }),
  //   [player, ui]
  // );

  return (
    <div ref={uiContainerRef} className="youtube-theme" >
      <video
        ref={videoRef}
        autoPlay
        // muted
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