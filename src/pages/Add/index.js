import React, { Fragment } from 'react';

import './style.css';
import InputItem from './Input';

export const Add = () => {
  return (
    <Fragment>
      <div className='container'>
        <h1 className='titulo'>Upload</h1>
        <div className='add'>
          <InputItem />
        </div>
      </div>
    </Fragment>
  );
};
