import React, { useRef } from "react";

const SingleVideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 5;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div className="video-container">
      <h2>Single Video Player</h2>

      <video
        ref={videoRef}
        className="video"
        width="400"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div className="controls">
        <button onClick={playVideo}>▶️ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={rewindVideo}>⏪ Rewind</button>
        <button onClick={forwardVideo}>⏩ Forward</button>
      </div>
    </div>
  );
};

export default SingleVideoPlayer;
 