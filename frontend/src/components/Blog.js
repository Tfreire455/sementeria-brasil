// src/components/Blog.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const BlogPost = styled.div`
  margin-bottom: 1rem;
`;

const BlogLink = styled.a`
  color: #4caf50;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Blog = () => (
  <BlogContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <Title>Artigos Recentes</Title>
    <BlogPost>
      <BlogLink href="/blog/post1">Como escolher os melhores grãos para sua dieta</BlogLink>
    </BlogPost>
    <BlogPost>
      <BlogLink href="/blog/post2">Benefícios dos grãos integrais para a saúde</BlogLink>
    </BlogPost>
    {/* Adicione mais posts se necessário */}
  </BlogContainer>
);

export default Blog;
