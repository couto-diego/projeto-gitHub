import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #0366d6;
  }
`;

const Footer = () => (
  <FooterContainer>
    <SocialLinks>
      <SocialLink href="https://github.com/couto-diego" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </SocialLink>
      <SocialLink href="https://linkedin.com/in/diegocouto87" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </SocialLink>
      <SocialLink href="https://couto-diego.github.io/portfolio-diego-couto/" target="_blank" rel="noopener noreferrer">
        <FaGlobe />
      </SocialLink>
    </SocialLinks>
    <p>© 2025 Diego Couto. Todos os direitos reservados.</p>
  </FooterContainer>
);

export default Footer;