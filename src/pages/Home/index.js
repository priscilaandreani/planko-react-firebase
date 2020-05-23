import React from 'react';
import app from '../../firebase/base';
import { Power } from 'react-feather';

import Footer from '../../components/common/Footer';
import Card from '../../components/Card';
import Melhores from '../../components/Melhores';

import './style.css';
import logo from '../../assets/logo-w.png';

export const Home = () => {
  return (
    <div className='container'>
      <div className='header'>
        <img className='logo-icon' src={logo} alt='logo unwired' />
        <p>Bem vindo, John Doe</p>
        <h3>
          plk-012 <span>by unwired</span>
        </h3>
        <button className='powerOff' onClick={() => app.auth().signout()}>
          <Power size={16} />
        </button>
        <Card />
        <h2>As 10 melhores</h2>
        <Melhores />
        <Footer />
      </div>
    </div>
  );
};
