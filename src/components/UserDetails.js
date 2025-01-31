import React from 'react';
import styled from 'styled-components';


const UserContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

const Stats = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
`;

const Email = styled.p`
  font-size: 1rem;
  color: #333;
`;

const UserDetails = ({ user }) => (
  <UserContainer>
    <Avatar src={user.avatar_url} alt={user.login} />
    <Name>{user.name || user.login}</Name>
    <Bio>{user.bio}</Bio>
    <Stats>Seguidores: {user.followers} | Seguindo: {user.following}</Stats>
    <Email>Email: {user.email || 'Não disponível'}</Email>
  </UserContainer>
);

export default UserDetails;