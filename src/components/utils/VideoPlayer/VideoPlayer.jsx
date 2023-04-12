import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";
import shaka from "shaka-player/dist/shaka-player.ui";
import { useSelector } from "react-redux";

function Player({ src, captions, thumbnail, onVideoEnded,playerRef}) {
  const uiContainerRef = useRef(null);
  const videoRef = useRef(null);
  // const [currentTime, setCurrentTime] = useState(0)
  const [player, setPlayer] = useState(null);
  const [ui, setUi] = useState(null);
  const quality = useSelector((state) => state.preference.quality);
  const onKeyPress = (event) => {
    switch (event.key) {
      case "p":
       
        break;
    }
  };

useEffect
  useEffect(() => {
    const player = new shaka.Player(playerRef.current);
    setPlayer(player);

    const ui = new shaka.ui.Overlay(
      player,
      uiContainerRef.current,
      playerRef.current
    );
    setUi(ui);

    shaka.polyfill.installAll();

    player.configure({
      abr: {
        enabled: false,
      },    
      streaming: {
        bufferingGoal: 10,
        rebufferingGoal: 10,
        retryParameters: {
          maxAttempts: 5,
          baseDelay: 1000,
          backoffFactor: 2,
          fuzzFactor: 0.5,
        },
       
      },

    });

    return () => {
      player.destroy();
      if (ui) {
        ui.destroy();
      }
    };
  }, []);


  // Load the source url when we have one.
  const loadVideo = async () => {
    try {
      playerRef?.current?.setAttribute("poster", thumbnail);
      // let storedTime = localStorage.getItem('currentTime');
      // if (captions) {
      //   // console.log(captions);
      //   await captions.forEach((caption) => {
      //      player.addTextTrackAsync(
      //       caption.url,
      //       caption.code,
      //       "subtitles",
      //       caption.mimeType,
      //     );
      //   });
      // }

      for (const track of player.getVariantTracks()) {
        if (track.height == quality || track.height === quality + 1) {
          player.selectVariantTrack(track, true);
          break;
        }
      }
      player.load(src,  0, "application/dash+xml");


    } catch (error) {
      console.error(error);
      // window.location.reload();
    }
  };

  useEffect(() => {
    if (player && src) {
      playerRef?.current?.setAttribute("poster", "");

      loadVideo(src);
    }
  }, [player, src]);

  return (
    <div ref={uiContainerRef} className="youtube-theme">
      {/* <div
        className="player-loading-overlay bg-slate-700"
        style={{ display: src && "none" }}
      >
        <div className="pac-man"></div>
      </div> */}
      <video
        // ref={videoRef}
        ref={playerRef}
        autoPlay
        // onPause={(e) => {
        //   let time = e.target.currentTime
        //   localStorage.setItem('currentTime', time);
        // }}
        onError={(e) => {
          console.log(e);
          // window.location.reload();
        }
        }
        onEnded={onVideoEnded}
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}

export default Player;
