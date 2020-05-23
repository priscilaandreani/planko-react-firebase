import React from 'react';
import { ShoppingBag, Download, Headphones } from 'react-feather';

import './style.css';

const Play = () => {
  return (
    <div className='destaques'>
      <div className='album'>
        <Headphones size={20} />
      </div>
      <div className='info'>
        <p className='music_name'>John Doe Set Song</p>
        <p className='autor'>John Doe</p>
        <div className='comprar'>
          <ShoppingBag size={20} />
          <p className='infos'>R$1,99</p>
          <Download size={20} />
          <p className='infos'>Baixar</p>
        </div>
      </div>
    </div>
  );
};

export default Play;
