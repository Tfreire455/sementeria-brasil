// src/components/Certifications.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificationsContainer = styled(motion.div)`
  padding: 2rem;
  text-align: center;
  background-color: #ffffff; // Fundo branco
  border-radius: 8px; // Bordas arredondadas, opcional
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra para um efeito de elevação, opcional

  @media (max-width: 768px) {
    padding: 1.5rem; // Reduzir o padding em telas menores
  }

  @media (max-width: 480px) {
    padding: 1rem; // Reduzir ainda mais o padding em telas muito pequenas
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.75rem; // Tamanho de fonte padrão

  @media (max-width: 768px) {
    font-size: 1.5rem; // Reduzir o tamanho da fonte em telas menores
  }

  @media (max-width: 480px) {
    font-size: 1.25rem; // Reduzir ainda mais o tamanho da fonte em telas muito pequenas
  }
`;

const CertificationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CertificationItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem; // Reduzir o tamanho da fonte em telas menores
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; // Reduzir ainda mais o tamanho da fonte em telas muito pequenas
  }
`;

const Certifications = () => (
  <CertificationsContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <Title>Certificações</Title>
    <CertificationList>
      <CertificationItem>Certificação de Qualidade</CertificationItem>
      <CertificationItem>Certificação Orgânica</CertificationItem>
      {/* Adicione mais certificações se necessário */}
    </CertificationList>
  </CertificationsContainer>
);

export default Certifications;
