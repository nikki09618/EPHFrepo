import React, { useRef, useState } from "react";

const MultiVideoPlayer = () => {
  const videoRef = useRef(null);

  const [videos] = useState([
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  ]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <div className="video-container">
      <h2>Multi Video Player</h2>

      <video
        ref={videoRef}
        key={currentVideoIndex}
        className="video"
        width="400"
        src={videos[currentVideoIndex]}
      />

      <div className="controls">
        <button onClick={playVideo}>▶️ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={rewindVideo}>⏪ Rewind</button>
        <button onClick={forwardVideo}>⏩ Forward</button>
      </div>

      <div className="navigation">
        <button onClick={prevVideo}>⏮ Previous</button>
        <button onClick={nextVideo}>⏭ Next</button>
      </div>
    </div>
  );
};

export default MultiVideoPlayer;
