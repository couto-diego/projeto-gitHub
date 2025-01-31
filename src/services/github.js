import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

// Busca os detalhes de um usuário
export const getUserDetails = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};

// Busca os repositórios de um usuário
export const getUserRepos = async (username) => {
  const response = await api.get(`/users/${username}/repos`);
  return response.data;
};

// Busca os detalhes de um repositório
export const getRepoDetails = async (fullName) => {
  const response = await api.get(`/repos/${fullName}`);
  return response.data;
};