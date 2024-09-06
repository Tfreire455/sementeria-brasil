import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Parallax } from "react-parallax";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Ícones de setas
import SideBanner from "../assets/destaque.jpg";

const CarouselContainer = styled(motion.div)`
  box-shadow: 0px 7px 18px 0px rgba(0, 0, 0, 0.75);
  margin-top: 150px;
  height: 64vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(2px);
  box-sizing: border-box;
  border-radius: 8px;
  @media (max-width: 1440px) {
    margin-top: 100px;
    height: 50vh;
  }
  @media (max-width: 1200px) {
    margin-top: 80px;
  }
  @media (max-width: 1024px) {
    margin-top: 60px;
    height: 55vh;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    height: 60vh;
  }
  @media (max-width: 600px) {
    margin-top: 30px;
    height: 65vh;
  }
  @media (max-width: 480px) {
    margin-top: 20px;
    height: 70vh;
  }
  @media (max-width: 320px) {
    margin-top: 10px;
    height: 75vh;
  }
`;

const Heading = styled(motion.h2)`
  font-size: 1.75rem;
  color: var(--primary-green);
  margin: 0 auto;
  margin-top: 1rem;
  text-align: center;
  width: 50%;
  border-radius: 10px;
  padding: 10px 0;
  background-color: var(--secondary-yellow);
  font-family: "Arial", sans-serif;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    color: var(--secondary-yellow);
    background-color: var(--light-green);
    transition: transform 0.3s ease, background-color 0.3s ease;
    transform: scale(1.02);
  }
  @media (max-width: 1440px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const ProductGridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  height: 74%;
  @media (max-width: 1440px) {
    padding: 1.5rem;
  }
  @media (max-width: 1200px) {
    padding: 1.2rem;
  }
  @media (max-width: 1024px) {
    padding: 1rem;
  }
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
  @media (max-width: 600px) {
    padding: 0.6rem;
  }
  @media (max-width: 480px) {
    padding: 0.4rem;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
  @media (max-width: 1440px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.4rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.3rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.2rem;
  }
  @media (max-width: 320px) {
    font-size: 0.8rem;
    padding: 0.1rem;
  }
`;

const ProductGrid = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://sementeriaapi.onrender.com/");
        const data = await response.json();
        console.log("Products loaded: ", data.items);
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const limitedProducts = products.slice(0, 9);
  console.log("Limited Products: ", limitedProducts);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? limitedProducts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === limitedProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CarouselContainer>
      <Parallax bgImage={SideBanner} strength={400} blur={0}>
        <Heading
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          Produtos em Destaque
        </Heading>
        <ProductGridContainer>
          <ArrowButton left onClick={handlePrev}>
            <FaArrowLeft />
          </ArrowButton>
          <ProductGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={currentIndex}
          >
            {limitedProducts.length > 0 ? (
              <ProductCard product={limitedProducts[currentIndex]} />
            ) : (
              <p>Nenhum produto disponível</p>
            )}
          </ProductGrid>
          <ArrowButton onClick={handleNext}>
            <FaArrowRight />
          </ArrowButton>
        </ProductGridContainer>
      </Parallax>
    </CarouselContainer>
  );
};

export default ProductCarousel;
