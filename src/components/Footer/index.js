import React from 'react';
import { Home, ShoppingBag, Download, FolderPlus } from 'react-feather';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = (props) => {
  return (
    <div className='bar'>
      <button className='button-link' type='button'>
        <Link to='/'>
          <div className='item'>
            <Home size={20} />
            <p>HOME</p>
          </div>
        </Link>
      </button>
      <button className='button-link' type='button'>
        <Link className={props.pathname === '/shop' ? 'active' : ''} to='/shop'>
          <div className='item'>
            <ShoppingBag size={19} />
            <p>LOJA</p>
          </div>
        </Link>
      </button>
      <button className='button-link' type='button'>
        <Link
          className={props.pathname === '/download' ? 'active' : ''}
          to='/download'>
          <div className='item'>
            <Download size={21} />
            <p>PLK-012</p>
          </div>
        </Link>
      </button>

      <button className='button-link' type='button'>
        <Link className={props.pathname === '/add' ? 'active' : ''} to='/add'>
          <div className='item'>
            <FolderPlus size={21} />
            <p>ADD</p>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default Footer;
