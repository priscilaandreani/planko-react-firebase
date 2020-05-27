import React from 'react';
import SetDestaque from '../SetDestaque';

import './style.css';

const Destaque = () => {
  return (
    <div className='card_container'>
      <h2>Destaques</h2>
      <div className='card_container_box'>
        <SetDestaque />
      </div>
    </div>
  );
};

export default Destaque;
