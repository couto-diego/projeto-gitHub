import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RepoListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const RepoItem = styled.li`
  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const RepoName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const RepoDescription = styled.p`
  color: #666;
  margin: 10px 0;
`;

const RepoStats = styled.p`
  color: #333;
  margin: 5px 0;
`;

const RepoLink = styled.a`
  color: #0366d6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RepoList = ({ repos }) => (
  <RepoListContainer>
    {repos.map((repo) => (
      <RepoItem key={repo.id}>
        <RepoName>
          <Link to={`/repo/${repo.full_name}`}>{repo.name}</Link>
        </RepoName>
        <RepoDescription>{repo.description}</RepoDescription>
        <RepoStats>⭐ {repo.stargazers_count}</RepoStats>
        <RepoStats>Linguagem: {repo.language || 'Não especificada'}</RepoStats>
        <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
          Ver no GitHub
        </RepoLink>
      </RepoItem>
    ))}
  </RepoListContainer>
);

export default RepoList;