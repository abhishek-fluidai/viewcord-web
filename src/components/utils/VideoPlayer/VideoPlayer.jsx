import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";
import shaka from "shaka-player/dist/shaka-player.ui";
import { useSelector } from "react-redux";

function Player({ src, captions, thumbnail, onVideoEnded, playerRef }) {
  const uiContainerRef = useRef(null);
  // const [currentTime, setCurrentTime] = useState(0)
  const [player, setPlayer] = useState(null);
  const [ui, setUi] = useState(null);
  const quality = useSelector((state) => state.preference.quality);

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
        enabled: false

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


  const loadVideo = async () => {
      playerRef?.current?.setAttribute("poster", thumbnail);
      player.load(src, 0, "application/dash+xml").then(() => {
        var tracks = player.getVariantTracks();
        var bestAudio = 0;
        var leastDiff = Number.MAX_VALUE;
        var bestStream = null;
        if (quality >= 480)
          tracks.forEach(track => {
            const audioBandwidth = track.audioBandwidth;
            if (audioBandwidth > bestAudio) bestAudio = audioBandwidth;
          });
        // Find best matching stream based on resolution and bitrate
        tracks
          .sort((a, b) => a.bandwidth - b.bandwidth)
          .forEach(stream => {
            if (stream.audioBandwidth < bestAudio) return;
            const diff = Math.abs(quality - stream.height);
            if (diff < leastDiff) {
              leastDiff = diff;
              bestStream = stream;
            }
          });
        player.selectVariantTrack(bestStream);
        captions.forEach(function(caption) {
          player.addTextTrackAsync(caption.url, caption.code, 'subtitles',caption.mimeType)
          .then(function(textTrack) {
          // Todo: add caption enable option
          })
          .catch(function(error) {
            console.error('Error adding text track', error);
          });
        });
      })
      .catch(error => {
        console.log(error);
      })
  };

  useEffect(() => {
    if (player && src) {
      playerRef?.current?.setAttribute("poster", "");

      loadVideo(src);
    }
  }, [player, src]);

  return (
    <div ref={uiContainerRef} className="youtube-theme">
      <video
        ref={playerRef}
        autoPlay
        // onPause={(e) => {
        //   let time = e.target.currentTime
        //   localStorage.setItem('currentTime', time);
        // }}
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
