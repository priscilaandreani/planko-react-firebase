import React, { Fragment } from 'react';
import MusicItem from '../MusicItem';
import Play from '../Play';

import './style.css';

const Card = () => {
  return (
    <Fragment>
      <div className='card_container'>
        <h2>Destaques</h2>
        <div className='card_container_box'>
          <Play />
        </div>
      </div>

      <div className='card_container'>
        <h2>Minhas Favoritas</h2>
        <div className='card_container_box_fav'>
          <MusicItem />
          <MusicItem />
          <MusicItem />
          <MusicItem />
          <MusicItem />
          <MusicItem />
          <MusicItem />
          <MusicItem />
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
