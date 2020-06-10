import React from 'react';
import app from '../../firebase/base';
import { Power } from 'react-feather';

import Card from '../../components/Card';
import Melhores from '../../components/Melhores';
import Destaque from '../../components/Destaque';

import './style.css';
import logo from '../../assets/preto.png';

export const Home = () => {
  return (
    <div className='container'>
      <div className='header'>
        <img className='logo-icon' src={logo} alt='logo unwired' />
        <p>Bem vindo!</p>
        <h3>
          plk-012 <span>by unwired</span>
        </h3>
        <button
          className='btn'
          type='button'
          onClick={() => app.auth().signout()}>
          <Power size={16} />
        </button>
        <Destaque />
        <h2 className='categorias'>Destaques da Semana</h2>
        <Card />
        <h2 className='categorias'>Meus favoritos</h2>
        <Melhores />
      </div>
    </div>
  );
};
