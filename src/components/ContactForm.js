// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 150px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} />
      <Input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} />
      <Textarea name="message" placeholder="Sua Mensagem" value={formData.message} onChange={handleChange} />
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default ContactForm;
