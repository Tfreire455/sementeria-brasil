// src/pages/ContactPage.js
import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  margin-top:110px;
  
  @media (max-width: 768px) {
    margin-top:220px;
  }
`;

const ContactPage = () => (
  <ContactContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h1>Entre em Contato</h1>
    <ContactForm />
  </ContactContainer>
);

export default ContactPage;
