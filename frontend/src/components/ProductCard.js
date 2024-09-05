import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  min-width: 200px;
  background: rgba(
    255,
    255,
    255,
    0.2
  ); /* Ajuste a transparência para melhor contraste */
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(
    8px
  ); /* Ajuste o desfoque para não comprometer a legibilidade */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  font-family: "Roboto", sans-serif;
  color: #333; /* Cor do texto alterada para maior contraste */

  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #000; /* Cor do título alterada para maior destaque */
`;

const ProductDetail = styled.p`
  text-align: start;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555; /* Cor do texto alterada para maior contraste */
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
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ProductTitle>{Produtos}</ProductTitle>
      <ProductDetail>Outros Estados p/kg: {outrosEstados}</ProductDetail>
      <ProductDetail>Em SP p/kg: {emSP}</ProductDetail>
      <ProductDetail>Em SP - Simples Nacional: {emSPSimples}</ProductDetail>
      <ProductDetail>Embalagem: {Embalagem}</ProductDetail>
    </Card>
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
