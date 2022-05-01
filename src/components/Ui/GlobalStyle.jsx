import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto ', sans-serif;   
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  } 
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #0D0C0C;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track{
    background-color: transparent;
    border-radius: 40px;
  }

  ::-webkit-scrollbar-thumb {
    
    background-color: #8c8080;
    border-radius: 40px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color:#8C374E;
    }
  }

  ::selection {
  color: #8C374E;
  background: #8c8080;
}
`
