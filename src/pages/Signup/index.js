import React, { useCallback } from 'react';
import app from '../../firebase/base';
import logo from '../../assets/logo-w.png';

export const Signup = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className='container'>
      <div>
        <img className='logo' src={logo} alt='unwired' />
      </div>

      <form onSubmit={handleSignUp}>
        <h1>Faça parte</h1>
        <div className='input'>
          <div className='inputBox'>
            <label>Nome:</label>
            <input name='name' type='text' placeholder='Nome'></input>
          </div>

          <div className='inputBox'>
            <label>Email:</label>
            <input name='email' type='email' placeholder='Email' />
          </div>

          <div className='inputBox'>
            <label>Senha:</label>
            <input name='password' type='password' placeholder='Senha' />
          </div>

          <div className='inputBox'>
            <h5>
              <a classname='' href='/login'>
                Já é cadastrado? <span>Clique aqui!</span>
              </a>
            </h5>
          </div>
        </div>
      </form>
    </div>
  );
};
