import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  },
  
  body {
    font-size: 16px;
  },

  #root{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  `;
