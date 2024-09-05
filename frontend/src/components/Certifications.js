// src/components/Certifications.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificationsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const CertificationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CertificationItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Certifications = () => (
  <CertificationsContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <Title>Certificações</Title>
    <CertificationList>
      <CertificationItem>Certificação de Qualidade</CertificationItem>
      <CertificationItem>Certificação Orgânica</CertificationItem>
      {/* Adicione mais certificações se necessário */}
    </CertificationList>
  </CertificationsContainer>
);

export default Certifications;
