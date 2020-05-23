import React from 'react';
import { Home, ShoppingBag, Download, Headphones } from 'react-feather';

import './style.css';

const Footer = () => {
  return (
    <div className='bar'>
      <a href='/'>
        <div className='item'>
          <Home size={20} />
          <p>HOME</p>
        </div>
      </a>
      <a href='/shop'>
        <div className='item'>
          <ShoppingBag size={19} />
          <p>LOJA</p>
        </div>
      </a>
      <a href='/download'>
        <div className='item'>
          <Download size={21} />
          <p>PLK-012</p>
        </div>
      </a>
      <a href='/play'>
        <div className='item'>
          <Headphones size={19} />
          <p>OUVIR</p>
        </div>
      </a>
    </div>
  );
};

export default Footer;
