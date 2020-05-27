import React, { useCallback, useContext } from 'react';
import { Redirect } from 'react-router';
import app from '../../firebase/base';
import { AuthContext } from '../../store/Auth';

import './style.css';
import logo from '../../assets/logo-w.png';

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
        <h1>Login</h1>
        <div className='input'>
          <div className='inputBox'>
            {/*  <label>Email:</label> */}
            <input name='email' type='email' placeholder='Email' />
          </div>

          <div className='inputBox'>
            {/* <label>Senha:</label> */}
            <input name='password' type='password' placeholder='Senha' />
          </div>
          <h5 className='link'>
            <a href='/login'>
              Esqueceu sua senha? <span>Clique aqui!</span>
            </a>
          </h5>
          <div className='inputBox'>
            <button type='submit'>Log in</button>
          </div>
        </div>
      </form>
    </div>
  );
};
