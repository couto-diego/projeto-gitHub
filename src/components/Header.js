import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <Title>GitHub Repo Finder</Title>
      <ThemeButton onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ThemeButton>
    </HeaderContainer>
  );
};

export default Header;