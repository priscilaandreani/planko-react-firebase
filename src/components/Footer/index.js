import React from 'react';
import { Home, ShoppingBag, Download } from 'react-feather';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => {
  return (
    <div className='bar'>
      <Link to='/'>
        <div className='item'>
          <Home size={20} />
          <p>HOME</p>
        </div>
      </Link>
      <Link to='/shop'>
        <div className='item'>
          <ShoppingBag size={19} />
          <p>LOJA</p>
        </div>
      </Link>
      <Link to='/download'>
        <div className='item'>
          <Download size={21} />
          <p>PLK-012</p>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
