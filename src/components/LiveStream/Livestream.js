import React, { useState } from 'react';
import RadioPlayer from './RadioPlayer/RadioPlayer';
import Stopwatch from './Stopwatch/Stopwatch';
import './Livestream.scss';

const RadioPage = () => {
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);

  const startStopwatch = () => {
    setIsRadioPlaying(true);
  };

  const pauseStopwatch = () => {
    setIsRadioPlaying(false);
  };
  const [selected, setSelected] = useState(false);

  return (
  <div className="wrapper">
    <div className="collapse">
      <div className="collapse-header">
        <div className="radio-player">
          <RadioPlayer onStart={startStopwatch} onPause={pauseStopwatch} />
        </div>
        <h2 className="collapse-title">Direct</h2>
        <div onClick={() => setSelected(!selected)} className={selected ? "selected" : "unselected"}></div>
      </div>
      <div className={selected ? "collapse-body show" : "collapse-body"}>
        <div className="collapse-content">
          <Stopwatch isRunning={isRadioPlaying}/>
        </div>
      </div>
    </div>
  </div>

  )


};

export default RadioPage;
