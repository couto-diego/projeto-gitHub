import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { ThemeContext } from '../context/ThemeContext'; // Certifique-se de que o caminho está correto

// Mock de valores de contexto para o ThemeContext
const mockContextValue = {
  isDarkMode: false,
  toggleTheme: jest.fn(),
};

describe('Header Component', () => {
  it('renders the title correctly', () => {
    render(
      <ThemeContext.Provider value={mockContextValue}>
        <Header />
      </ThemeContext.Provider>
    );
    expect(screen.getByText('GitHub Repo Finder')).toBeInTheDocument(); // Alterado para o título correto
  });

  it('renders the theme toggle button', () => {
    render(
      <ThemeContext.Provider value={mockContextValue}>
        <Header />
      </ThemeContext.Provider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument(); // Verifique se o botão de alternância de tema está presente
  });
});
