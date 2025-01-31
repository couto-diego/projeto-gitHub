import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRepoDetails } from '../services/github';

const RepoDetails = () => {
  const { fullName } = useParams(); // Obtém o fullName da URL
  const [repo, setRepo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const data = await getRepoDetails(fullName); // Busca os detalhes do repositório
        setRepo(data);
      } catch (err) {
        setError('Repositório não encontrado');
      }
    };
    fetchRepoDetails();
  }, [fullName]);

  if (error) return <p>{error}</p>;
  if (!repo) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>⭐ {repo.stargazers_count}</p>
      <p>Linguagem: {repo.language || 'Não especificada'}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Ver no GitHub
      </a>
    </div>
  );
};

export default RepoDetails;