import React from 'react';
import { Zap } from 'react-feather';

import './style.css';

const MusicItem = () => {
  return (
    <div className='music_item'>
      <Zap size={20} />
      <p>set</p>
    </div>
  );
};

export default MusicItem;
