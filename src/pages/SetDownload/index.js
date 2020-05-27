import React, { Fragment } from 'react';

import { SetRow } from './SetRow';
import { SetPlay } from './SetPlay';

import Footer from '../../components/Footer';

import './style.css';

export const SetDownload = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='ouvir'>
          <SetPlay />
        </div>
        <div className='container_set'>
          <SetRow>Crash</SetRow>
          <SetRow>High</SetRow>
          <SetRow>Kick01</SetRow>
          <SetRow>Kick02</SetRow>
          <SetRow>Snare01</SetRow>
          <SetRow>Snare02</SetRow>
          <SetRow>Tom01</SetRow>
          <SetRow>Tom02</SetRow>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};
