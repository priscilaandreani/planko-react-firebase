import React, { Fragment } from 'react';
import MusicItem from '../MusicItem';
import './style.css';

const Card = () => {
  return (
    <Fragment>
      <div className='card_container'>
        <div className='card_container_box_fav'>
          <MusicItem>set01</MusicItem>
          <MusicItem>john</MusicItem>
          <MusicItem>dow</MusicItem>
          <MusicItem>012</MusicItem>
          <MusicItem>wu</MusicItem>
          <MusicItem>beat</MusicItem>
          <MusicItem>drum</MusicItem>
          <MusicItem>003</MusicItem>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
