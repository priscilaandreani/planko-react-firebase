import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import destaque from '../../assets/image/destaque.png';

const Destaque = () => {
  return (
    <div className='card_container_box_photo'>
      <Link to='/shop/download'>
        <img src={destaque} alt='destaque-principal' />
      </Link>
    </div>
  );
};

export default Destaque;
