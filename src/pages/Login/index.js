import React, { useCallback, useContext } from 'react';
import { Redirect } from 'react-router';
import app from '../../firebase/base';
import { AuthContext } from '../../store/Auth';

import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';

export const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <div className='container'>
      <div>
        <img className='logo' src={logo} alt='unwired' />
      </div>

      <form onSubmit={handleLogin}>
        <h1 className='h1_login'>Bem vindo de volta!</h1>
        <h2 className='h2_login'>Entre para continuar</h2>
        <div className='input'>
          <div className='inputBox'>
            <input name='email' type='email' placeholder='Email' />
          </div>

          <div className='inputBox'>
            <input name='password' type='password' placeholder='Senha' />
          </div>
          <h5 className='link'>
            <Link to='/login'>
              Esqueceu sua senha? <span>Clique aqui! </span>
            </Link>{' '}
            <br></br>{' '}
            <Link to='/signup'>
              {' '}
              Ou então,
              <span> cadastre-se!</span>
            </Link>
          </h5>
          <div className='inputBox'>
            <button className='login' type='submit'>
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
