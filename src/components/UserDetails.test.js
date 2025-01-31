import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Importando o BrowserRouter
import RepoList from './RepoList'; // Certifique-se de que o caminho está correto

const repos = [
  {
    id: 1,
    name: 'repo1',
    description: 'Descrição do repositório 1',
    stargazers_count: 10,
    language: 'JavaScript',
    html_url: 'https://github.com/repo1',
  },
  {
    id: 2,
    name: 'repo2',
    description: 'Descrição do repositório 2',
    stargazers_count: 20,
    language: 'TypeScript',
    html_url: 'https://github.com/repo2',
  },
];

describe('RepoList Component', () => {
  it('renders the list of repositories', () => {
    render(
      <BrowserRouter> {/* Envolva o componente com o BrowserRouter */}
        <RepoList repos={repos} />
      </BrowserRouter>
    );
    expect(screen.getByText('repo1')).toBeInTheDocument();
    expect(screen.getByText('repo2')).toBeInTheDocument();
  });

  it('renders repository descriptions correctly', () => {
    render(
      <BrowserRouter>
        <RepoList repos={repos} />
      </BrowserRouter>
    );
    expect(screen.getByText('Descrição do repositório 1')).toBeInTheDocument();
    expect(screen.getByText('Descrição do repositório 2')).toBeInTheDocument();
  });
});
