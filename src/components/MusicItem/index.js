import React, { Fragment } from 'react';
import { Zap } from 'react-feather';

import './style.css';
import { Link } from 'react-router-dom';

const MusicItem = (props) => {
  return (
    <Fragment>
      <Link to='/shop/download'>
        <div className='music_item'>
          <Zap size={20} />
          <p>{props.children}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default MusicItem;
