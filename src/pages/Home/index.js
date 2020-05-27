import React from 'react';
import app from '../../firebase/base';
import { Power } from 'react-feather';

import Card from '../../components/Card';
import Melhores from '../../components/Melhores';
import Destaque from '../../components/Destaque';
import Footer from '../../components/Footer';

import './style.css';
import logo from '../../assets/branco.png';

export const Home = () => {
  return (
    <div className='container'>
      <div className='header'>
        <img className='logo-icon' src={logo} alt='logo unwired' />
        <p>Bem vindo!</p>
        <h3>
          plk-012 <span>by unwired</span>
        </h3>
        <button className='powerOff' onClick={() => app.auth().signout()}>
          <Power size={16} />
        </button>
        <Destaque />
        <h2>Meus favoritos</h2>
        <Card />
        <h2>Destaque do mês</h2>
        <Melhores />
        <Footer />
      </div>
    </div>
  );
};
