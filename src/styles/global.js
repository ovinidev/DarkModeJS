import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: sans-serif;
  }
`;
