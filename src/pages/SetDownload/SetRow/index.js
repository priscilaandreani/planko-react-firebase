import React, { Fragment, useState } from 'react';

import { Download } from 'react-feather';

import Player from './PlayBeat';

import './style.css';

export const SetRow = (props) => {
  return (
    <Fragment>
      <div className='row_set'>
        <div className='icon_set'>
          <Player src='./audio/wu-drum-kit/crash.wav' />
          <button className='download' type='submit'>
            <a href='#' download='./audio/wu-drum-kit/crash.wav'>
              <Download />
            </a>
          </button>
          <p>{props.children}</p>
        </div>
      </div>
    </Fragment>
  );
};
