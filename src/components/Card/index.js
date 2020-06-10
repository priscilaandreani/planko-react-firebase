import React, { Fragment } from 'react';
import MusicItem from '../MusicItem';
import './style.css';

import destaque01 from '../../assets/image/destaque01.png';
import destaque02 from '../../assets/image/destaque02.png';

const Card = () => {
  return (
    <Fragment>
      <div className='card_container'>
        <div className='card_container_box_fav'>
          <MusicItem image={destaque01} />
          <MusicItem image={destaque02} />
          <MusicItem image={destaque01} />
          <MusicItem image={destaque02} />
          <MusicItem image={destaque01} />
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
