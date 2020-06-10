import React, { Fragment } from 'react';

import Card from '../../components/Card';
import SearchItem from '../../components/SearchItem';

import './style.css';

export const Shop = () => {
  return (
    <Fragment>
      <div className='container'>
        <h1 className='titulo'>Categorias</h1>
        <div className='search'>
          <SearchItem />
        </div>
        <div>
          <h2 className='categorias'>Mais vendidos do mês</h2>
          <Card />
          <h2 className='categorias'>Mais vendidos da semana</h2>
          <Card />
          <h2 className='categorias'>Bateria</h2>
          <Card />
          <h2 className='categorias'>Baixo</h2>
          <Card />
          <h2 className='categorias'>Synth</h2>
          <Card />
          <h2 className='categorias'>Vocal</h2>
          <Card />
        </div>
      </div>
    </Fragment>
  );
};
