import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled(motion.div)`
  width: 80vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 480px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  padding: 1rem;
  text-align: left;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
    font-family: "Roboto", sans-serif;
    color: #333;
  margin: 15px 5px;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
    }
    
  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }
    `;
    
    const Header = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    `;
    
    const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: var(--secondary-yellow);
  border-radius: 15px 15px 0 0 ;
  height: 100%;
  padding: 10px;
  background-color: var(--primary-green);
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Body = styled.div`
  flex: 1;
`;

const ProductDetail = styled.p`
  font-size: 0.85rem;
  color: #fff;
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Footer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding-top: 0.5rem;
`;

const StyledButton = styled.button`
  background-color: #ff0084;
  border: none;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  transition: background-color 0.3s ease;
  width: 100%;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #ff3366;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    background-color: #ff0055;
    outline: none;
    box-shadow: none;
  }
`;

const ProductCard = ({ product }) => {
  console.log("Current product: ", product); // Verificar o produto atual

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  const {
    Produtos = "Produto desconhecido",
    "Outros Estados p/kg": outrosEstados = "Não disponível",
    "Em SP p/kg": emSP = "Não disponível",
    "Em SP -\r\nSimples Nacional": emSPSimples = "Não disponível",
    Embalagem = "Não disponível",
  } = product;

  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
    >
      <Header>
        <ProductTitle>{Produtos}</ProductTitle>
      </Header>
      <Body>
        <ProductDetail>Outros Estados p/kg: {outrosEstados}</ProductDetail>
        <ProductDetail>Em SP p/kg: {emSP}</ProductDetail>
        <ProductDetail>Em SP - Simples Nacional: {emSPSimples}</ProductDetail>
        <ProductDetail>Embalagem: {Embalagem}</ProductDetail>
      </Body>
      <Footer>
        <StyledButton>Ver Detalhes</StyledButton>
      </Footer>
    </CardContainer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
