import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: 'Fabrica';
  src: local('Fabrica'), url(./fonts/fabrica.otf) format('opentype');
}

  * {
    font-family: 'Fabrica', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 10px;
  },

  #root{
    display: flex;
  },
  `;
