import React from 'react';

import './style.css';
import MusicItem from '../MusicItem';

const Melhores = () => {
  return (
    <div className='card_container_box_best'>
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
    </div>
  );
};
export default Melhores;
