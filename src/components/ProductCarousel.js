import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const CarouselContainer = styled(motion.div)`
  margin: 10px 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 72vh;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: 84vh;
  }
`;

const Heading = styled(motion.h2)`
  font-size: 1.75rem;
  color: #333;
  margin-top: 1rem;
  text-align: center;
  font-family: "Arial", sans-serif;
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    color: #ff0084;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const ProductGridContainer = styled.div`
  justify-content: space-between;
  margin: -43px 8px;
  display: flex;
  overflow-x: auto;
  padding: 3rem;
  height: 64vh;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #888 #f9f9f9;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #888 #f9f9f9;

  ::-webkit-scrollbar {
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f9f9f9;
  }
`;

const ProductGrid = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://sementeriaapi.onrender.com/");
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            duration: 1.2,
          }}
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
