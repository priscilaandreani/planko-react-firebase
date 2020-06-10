import React, { Fragment } from 'react';

import { Box, Image, Link, DollarSign } from 'react-feather';
import './style.css';

const InputItem = () => {
  return (
    <Fragment>
      <div className='inputs-add'>
        <div className='input-box'>
          <Box size={20} />
        </div>
        <input
          className='info-input'
          type='text'
          placeholder='Título do Set'></input>
      </div>

      <div className='inputs-add'>
        <div className='input-box'>
          <Image size={20} />
        </div>
        <input
          className='info-input'
          type='text'
          placeholder='Capa do Set'></input>
      </div>

      <div className='inputs-add'>
        <div className='input-box'>
          <Link size={20} />
        </div>
        <input
          className='info-input'
          type='text'
          placeholder='Creative Commons'></input>
      </div>
      <div className='inputs-add'>
        <div className='input-box'>
          <DollarSign size={20} />
        </div>
        <input className='info-input' type='text' placeholder='Preço'></input>
      </div>
    </Fragment>
  );
};

export default InputItem;
