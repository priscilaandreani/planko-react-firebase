import React from 'react';

import './style.css';
import MusicItem from '../MusicItem';

const Melhores = () => {
  return (
    <div className='card_container_box_best'>
      <MusicItem>drum</MusicItem>
      <MusicItem>ibiza</MusicItem>
      <MusicItem>asot</MusicItem>
      <MusicItem>dream</MusicItem>
    </div>
  );
};
export default Melhores;
