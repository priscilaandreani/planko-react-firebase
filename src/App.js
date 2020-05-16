import React, { Fragment } from 'react';

// import { Route } from 'react-router-dom';
import { Routes } from './routes';

import { GlobalStyle } from './style.js';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}

export default App;
