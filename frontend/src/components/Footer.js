// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  padding: 1rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: #4caf50;
  text-decoration: none;
  margin: 0 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Sementeria Brasil. Todos os direitos reservados.</p>
    <p>
      <FooterLink to="/privacy-policy">Política de Privacidade</FooterLink> | 
      <FooterLink to="/terms">Termos e Condições</FooterLink>
    </p>
    <p>Contato: sementeriabrasil@gmail.com | (11)94422-0143</p>
    <p>Redes Sociais: [Ícones de redes sociais]</p>
  </FooterContainer>
);

export default Footer;
