import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#f4f4f4',
  text: '#333',
  background: '#fff',
  border: '#ddd',
};

export const darkTheme = {
  body: '#1a1a1a',
  text: '#f4f4f4',
  background: '#24292e',
  border: '#444',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
  }

  a {
    text-decoration: none;
    color: #333;
    text-shadow: 2px 2px 5px rgba(32, 32, 32, 0.5);
    
  }

  button {
    cursor: pointer;
  }
`;