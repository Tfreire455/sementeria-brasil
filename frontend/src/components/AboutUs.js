// src/components/AboutUs.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

const AboutUs = () => (
  <AboutContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <Title>Sobre Nós</Title>
    <Description>
      Somos a Sementeria Brasil, especializados na venda de grãos e sementes de alta qualidade. Nossa missão é fornecer produtos frescos e sustentáveis para nossos clientes.
    </Description>
  </AboutContainer>
);

export default AboutUs;
