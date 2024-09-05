// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const TestimonialItem = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Testimonial = ({ name, message }) => (
  <TestimonialItem>
    <p><strong>{name}</strong></p>
    <p>{message}</p>
  </TestimonialItem>
);

const Testimonials = () => (
  <TestimonialsContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <Title>O que nossos clientes dizem</Title>
    <Testimonial name="João Silva" message="Ótimos produtos e atendimento! Recomendo a todos." />
    <Testimonial name="Maria Oliveira" message="A qualidade dos grãos é excelente. Voltarei a comprar!" />
    {/* Adicione mais depoimentos se necessário */}
  </TestimonialsContainer>
);

export default Testimonials;
