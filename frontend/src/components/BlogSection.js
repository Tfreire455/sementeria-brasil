// src/components/BlogSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogContainer = styled.div`
  padding: 2rem;
`;

const BlogPost = styled.div`
  margin-bottom: 1rem;
`;

const BlogSection = () => {
  const posts = [
    // Exemplos de posts
    { id: 1, title: 'Benefícios dos Grãos Integrais', excerpt: 'Descubra por que os grãos integrais são ótimos para a saúde...' },
    { id: 2, title: 'Como Escolher a Melhor Semente', excerpt: 'Dicas para selecionar sementes de alta qualidade...' },
    // Adicione mais posts aqui
  ];

  return (
    <BlogContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Blog</h2>
      {posts.map(post => (
        <BlogPost key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </BlogPost>
      ))}
    </BlogContainer>
  );
};

export default BlogSection;
