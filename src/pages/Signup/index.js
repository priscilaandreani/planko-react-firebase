import React, { useCallback } from 'react';
import app from '../../firebase/base';

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
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Nome:
          <input name='nome' type='text' placeholder='Nome'></input>
        </label>
        <label>
          Email:
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label>
          Senha:
          <input name='password' type='password' placeholder='Password' />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};
