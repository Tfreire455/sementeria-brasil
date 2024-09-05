// src/components/Promotions.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PromotionsContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const PromotionCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
`;

const Promotions = () => (
  <PromotionsContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <Title>Promoções e Ofertas</Title>
    <PromotionCard>
      <h3>20% de desconto em todos os produtos</h3>
      <p>Use o código PROMO20 na finalização da compra.</p>
    </PromotionCard>
    {/* Adicione mais promoções se necessário */}
  </PromotionsContainer>
);

export default Promotions;
