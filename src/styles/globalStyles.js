import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#f4f4f4',
  text: '#333',
  background: '#fff',
  cardBackground: '#fff',
  cardBorder: '#ddd',
  buttonBackground: '#24292e',
  buttonText: '#fff',
};

export const darkTheme = {
  body: '#1a1a1a',
  text: '#f4f4f4',
  background: '#24292e',
  cardBackground: '#333',
  cardBorder: '#444',
  buttonBackground: '#444',
  buttonText: '#fff',
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
    color: inherit;
  }

  button {
    cursor: pointer;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.buttonBackground === '#24292e' ? '#1c1f23' : '#555'};
    }
  }
`;