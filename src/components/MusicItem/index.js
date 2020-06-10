import React, { Fragment } from 'react';

import './style.css';
import { Link } from 'react-router-dom';

const MusicItem = (props) => {
  return (
    <Fragment>
      <Link to='/shop/download'>
        <div className='music_item'>
          <img src={props.image} alt='meus favoritos'></img>
        </div>
      </Link>
    </Fragment>
  );
};

export default MusicItem;
