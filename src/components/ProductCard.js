import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardContainer = styled(motion.div)`
  width: 50vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 480px; /* Diminuí um pouco o tamanho máximo */
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  padding: 1rem; /* Diminuí o padding */
  text-align: left;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  font-family: "Roboto", sans-serif;
  color: #333;
  margin: 15px 05px;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem; /* Diminuí o tamanho do título */
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1rem; /* Tamanho maior para telas maiores */
  }
`;

const ProductDetail = styled.p`
  font-size: 0.85rem; /* Diminuí o tamanho dos detalhes */
  color: #555;
  margin-bottom: 0.5rem; /* Diminuí o espaçamento entre os itens */

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: #ff0084;
  border: none;
  padding: 0.4rem 0.9rem; /* Diminuí o padding do botão */
  font-size: 0.85rem; /* Ajustei o tamanho da fonte do botão */
  transition: background-color 0.3s ease;
  width: 100%;

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
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card.Header>
        <ProductTitle>{Produtos}</ProductTitle>
      </Card.Header>
      <Card.Body>
        <ProductDetail>Outros Estados p/kg: {outrosEstados}</ProductDetail>
        <ProductDetail>Em SP p/kg: {emSP}</ProductDetail>
        <ProductDetail>Em SP - Simples Nacional: {emSPSimples}</ProductDetail>
        <ProductDetail>Embalagem: {Embalagem}</ProductDetail>
      </Card.Body>
      <Card.Footer>
        <StyledButton>Ver Mais</StyledButton>
      </Card.Footer>
    </CardContainer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    Produtos: PropTypes.string,
    "Outros Estados p/kg": PropTypes.string,
    "Em SP p/kg": PropTypes.string,
    "Em SP -\r\nSimples Nacional": PropTypes.string,
    Embalagem: PropTypes.string,
  }),
};

export default ProductCard;
