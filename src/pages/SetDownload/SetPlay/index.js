import React from 'react';

import { Play, ChevronRight, ChevronLeft } from 'react-feather';
import './style.css';

export const SetPlay = () => {
  return (
    <div className='container_play'>
      <div className='container_text'>
        <h2>John Doe Set</h2>
        <h3>John Doe</h3>
      </div>
      <div className='container_player'>
        <button className='play'>
          <ChevronLeft size={24} />
        </button>
        <button className='play'>
          <Play size={20} />
        </button>
        <button className='play'>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
