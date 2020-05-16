import React from 'react';
import { Container } from './style.js';
import app from '../../firebase/base';

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <button onClick={() => app.auth().signout()}>Signout</button>
    </Container>
  );
};
