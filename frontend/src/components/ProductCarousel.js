import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const CarouselContainer = styled(motion.div)`
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100; /* Limita a largura do contêiner principal */
  overflow: hidden; /* Oculta qualquer overflow do contêiner principal */
`;

const Heading = styled(motion.h2)`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Arial', sans-serif; /* Alterar a fonte */
  transition: transform 0.3s ease, color 0.3s ease;
  
  &:hover {
    color: #ff0084; /* Alterar a cor ao passar o mouse */
    transform: scale(1.02); /* Efeito de zoom no hover */
  }
`;

const ProductGridContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Permite o scroll horizontal */
  padding: 1rem 0;
  max-height: 300px; /* Define uma altura máxima para o contêiner de produtos */
  overflow-y: hidden; /* Oculta o scroll vertical */
  scroll-behavior: smooth; /* Suaviza a rolagem */
  scrollbar-width: thin; /* Largura da barra de rolagem para navegadores que suportam */
  scrollbar-color: #888 #f9f9f9; /* Cor da barra de rolagem para navegadores que suportam */
  
  /* Estilização para a barra de rolagem em Webkit (Chrome, Safari) */
  ::-webkit-scrollbar {
    height: 8px; /* Altura da barra de rolagem */
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor da barra de rolagem */
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #f9f9f9; /* Cor de fundo da barra de rolagem */
  }
`;

const ProductGrid = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap; /* Impede a quebra de linha */
`;

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função para buscar os produtos
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/");
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Limita o número de produtos a 9
  const limitedProducts = products.slice(0, 9);

  return (
    <CarouselContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Produtos em Destaque
      </Heading>
      <ProductGridContainer>
        <ProductGrid
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
        >
          {limitedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </ProductGridContainer>
    </CarouselContainer>
  );
};

export default ProductCarousel;
