// src/components/AboutUs.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  padding: 2rem;
  text-align: center;
  background-color: #ffffff; // Fundo branco
  border-radius: 8px; // Bordas arredondadas, opcional
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra para um efeito de elevação, opcional

  @media (max-width: 768px) {
    padding: 1rem; // Reduzir o padding em telas menores
  }

  @media (max-width: 480px) {
    padding: 0.5rem; // Reduzir ainda mais o padding em telas muito pequenas
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem; // Tamanho de fonte padrão

  @media (max-width: 768px) {
    font-size: 1.25rem; // Reduzir o tamanho da fonte em telas menores
  }

  @media (max-width: 480px) {
    font-size: 1rem; // Reduzir ainda mais o tamanho da fonte em telas muito pequenas
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.875rem; // Reduzir o tamanho da fonte em telas menores
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; // Reduzir ainda mais o tamanho da fonte em telas muito pequenas
  }
`;

const AboutUs = () => (
  <AboutContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <Title>Sobre Nós</Title>
    <Description>
      Somos a Sementeria Brasil, especializados na venda de grãos e sementes de alta qualidade. Nossa missão é fornecer produtos frescos e sustentáveis para nossos clientes.
    </Description>
  </AboutContainer>
);

export default AboutUs;
