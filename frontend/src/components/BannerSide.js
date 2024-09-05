import React from "react";
import styled from "styled-components";
import bannerSideImg from "../assets/sideBanner.jpg";

const SideBannerContainer = styled.div`
  height: 60vh;
  width: auto;
  background: url(${bannerSideImg}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease; /* Animação suave ao passar o mouse */
  
  &:hover {
    transform: scale(1.02); /* Aumenta ligeiramente o tamanho do banner */
  }
`;

const BannerContent = styled.div`
  height: 100%;
  transition: transform 0.3s ease; /* Animação suave ao passar o mouse */
  
  ${SideBannerContainer}:hover & {
    transform: translateY(-5px); /* Leve elevação do conteúdo ao passar o mouse */
  }
`;

const BannerTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease; /* Animação suave para a cor do título */
  
  ${SideBannerContainer}:hover & {
    color: #ffe600; /* Mudança de cor do título ao passar o mouse */
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease; /* Animação suave para a cor do subtítulo */
  
  ${SideBannerContainer}:hover & {
    color: #ffe600; /* Mudança de cor do subtítulo ao passar o mouse */
  }
`;

const CTAButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #ff0084;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease; /* Animação suave para o botão */
  
  &:hover {
    background-color: #e60077; /* Mudança de cor ao passar o mouse */
    transform: scale(1.05); /* Aumenta ligeiramente o botão ao passar o mouse */
  }
`;

const SideBanner = () => (
  <SideBannerContainer>
    <BannerContent>
      <BannerTitle>Promoções Especiais</BannerTitle>
      <BannerSubtitle>Não perca nossas ofertas exclusivas!</BannerSubtitle>
      <CTAButton>Saiba Mais</CTAButton>
    </BannerContent>
  </SideBannerContainer>
);

export default SideBanner;
