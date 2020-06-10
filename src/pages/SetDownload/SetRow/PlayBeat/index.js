import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'react-feather';

const useAudio = (src) => {
  const [audio] = useState(new Audio(src));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ src }) => {
  const [playing, toggle] = useAudio(src);

  return (
    <div>
      <button className='down_and_play' onClick={toggle}>
        {playing ? <Pause /> : <Play />}
      </button>
    </div>
  );
};

export default Player;
