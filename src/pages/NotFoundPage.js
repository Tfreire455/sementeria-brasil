// src/pages/NotFoundPage.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <h1>404 - Página Não Encontrada</h1>
    <p>Desculpe, a página que você está procurando não foi encontrada.</p>
    <Link to="/">Voltar para a página inicial</Link>
  </NotFoundContainer>
);

export default NotFoundPage;
