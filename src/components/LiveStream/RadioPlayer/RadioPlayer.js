import React from 'react';
import './RadioPlayer.scss'

const RadioPlayer = ({ onStart, onPause }) => {
  return (
    <div className="radio-player">
      {/* Add your play and pause controls here */}
      <span className ="play" onClick={onStart}></span>
      <span className ="stop" onClick={onPause}></span>
      {/* Other radio player components */}
    </div>
  );
};

export default RadioPlayer;
