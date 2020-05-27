import React, { Fragment } from 'react';

import Card from '../../components/Card';
import Footer from '../../components/Footer';

import './style.css';

export const Shop = () => {
  return (
    <Fragment>
      <div className='container'>
        <h2>Mais vendidos do mês</h2>
        <Card />
        <h2>Mais vendidos da semana</h2>
        <Card />
        <h2>Bateria</h2>
        <Card />
        <h2>Baixo</h2>
        <Card />
        <h2>Synth</h2>
        <Card />
        <h2>Vocal</h2>
        <Card />
      </div>
      <Footer />
    </Fragment>
  );
};
