import React from 'react';
import app from '../../firebase/base';

export const Home = () => {
  return (
    <div className='container'>
      <div>
        <div>
          <div>
            <div
              className='has-text-weight-light has-text-centered has-text-white'
              size={1}>
              SEU APP DE <br />
              <span className='has-text-success'>MÚSICA</span>
            </div>
          </div>
        </div>
        <div className='is-centered is-mobile'>
          <div mobile={{ size: 8, offset: 1 }} desktop={{ size: 4, offset: 2 }}>
            <div className='has-text-white'>
              <li>
                Suas músicas <b>Favoritas</b>
              </li>
              <li>
                Seus <b>Podcasts</b>
              </li>
              <li>
                Os <b>Lançamentos</b>
              </li>
              <li>
                As novas <b>Descobertas</b>
              </li>
            </div>
          </div>
        </div>
        <div className='has-text-centered'>
          <div>
            <a href='users/sign_up'>
              <div className='is-success is-outlined is-large has-text-white'>
                CADASTRAR AGORA
              </div>
            </a>
          </div>
        </div>
      </div>
      ); }<button onClick={() => app.auth().signout()}>Signout</button>
    </div>
  );
};
