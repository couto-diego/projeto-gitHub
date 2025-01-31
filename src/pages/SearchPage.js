import React, { useState } from 'react';
import styled from 'styled-components';
import { getUserDetails, getUserRepos } from '../services/github';
import UserDetails from '../components/UserDetails';
import RepoList from '../components/RepoList';

const SearchContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchForm = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #24292e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background 0.3s;
  cursor: pointer;

  &:hover {
    background: #1c1f23;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  text-align: center;
`;

const SearchPage = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const userData = await getUserDetails(username);
      const reposData = await getUserRepos(username);
      setUser(userData);
      setRepos(reposData.sort((a, b) => b.stargazers_count - a.stargazers_count));
      setError('');
    } catch (err) {
      setError('Usuário não encontrado');
      setUser(null);
      setRepos([]);
    }
  };

  return (
    <SearchContainer>
      <SearchForm>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite o nome de usuário do GitHub"
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </SearchForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {user && <UserDetails user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </SearchContainer>
  );
};

export default SearchPage;