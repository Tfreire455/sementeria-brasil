// src/components/NewsletterSignup.js
import React, { useState } from 'react';
import styled from 'styled-components';

const NewsletterContainer = styled.div`
  padding: 2rem;
  background: #4caf50;
  color: #fff;
  text-align: center;
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  width: 300px;
`;

const NewsletterButton = styled.button`
  background: #fff;
  color: #4caf50;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #ddd;
  }
`;

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement subscription logic
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <NewsletterContainer>
      <h2>Inscreva-se para nossas atualizações</h2>
      <NewsletterForm onSubmit={handleSubmit}>
        <NewsletterInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu e-mail" required />
        <NewsletterButton type="submit">Inscrever-se</NewsletterButton>
      </NewsletterForm>
    </NewsletterContainer>
  );
};

export default NewsletterSignup;
