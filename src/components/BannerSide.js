import React from "react";
import styled from "styled-components";
import bannerSideImg from "../assets/sideBanner.jpg";

const SideBannerContainer = styled.div`
  height: 50vh; /* Reduzido de 64vh para 50vh */
  width: auto;
  background: url(${bannerSideImg}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  color: #fff;
  text-align: center;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 40vh; /* Ajusta a altura para telas menores */
  }

  @media (max-width: 576px) {
    height: 35vh; /* Ajusta a altura para telas muito pequenas */
  }
`;


const BannerContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: transform 0.3s ease; /* Animação suave ao passar o mouse */

  ${SideBannerContainer}:hover & {
    transform: translateY(
      -5px
    ); /* Leve elevação do conteúdo ao passar o mouse */
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0.5rem; /* Ajusta o padding para telas menores */
  }
`;

const BannerTitle = styled.h2`
  font-size: 1.5rem;
  background-color: var(--light-green);
  padding: 5px 15px;
  margin-bottom: 1rem;
  transition: color 0.3s ease; /* Animação suave para a cor do título */

  ${SideBannerContainer}:hover & {
    color: #ffe600; /* Mudança de cor do título ao passar o mouse */
  }

  @media (max-width: 768px) {
    font-size: 1.25rem; /* Reduz o tamanho da fonte para telas menores */
    margin-bottom: 0.75rem; /* Ajusta a margem inferior */
  }

  @media (max-width: 576px) {
    font-size: 1rem; /* Reduz ainda mais o tamanho da fonte para telas muito pequenas */
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1rem;

  background-color: var(--light-green);
  padding: 5px 15px;
  transition: color 0.3s ease; /* Animação suave para a cor do subtítulo */

  ${SideBannerContainer}:hover & {
    color: #ffe600; /* Mudança de cor do subtítulo ao passar o mouse */
  }

  @media (max-width: 768px) {
    font-size: 0.875rem; /* Reduz o tamanho da fonte para telas menores */
    margin-bottom: 1rem; /* Ajusta a margem inferior */
  }

  @media (max-width: 576px) {
    font-size: 0.75rem; /* Reduz ainda mais o tamanho da fonte para telas muito pequenas */
    margin-bottom: 0.75rem; /* Ajusta a margem inferior */
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
  transition:
    background-color 0.3s ease,
    transform 0.3s ease; /* Animação suave para o botão */

  &:hover {
    background-color: #e60077; /* Mudança de cor ao passar o mouse */
    transform: scale(1.05); /* Aumenta ligeiramente o botão ao passar o mouse */
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem; /* Ajusta o padding para telas menores */
    font-size: 0.875rem; /* Reduz o tamanho da fonte */
  }

  @media (max-width: 576px) {
    padding: 0.3rem 0.6rem; /* Ajusta ainda mais o padding para telas muito pequenas */
    font-size: 0.75rem; /* Reduz ainda mais o tamanho da fonte */
  }
`;

const SideBanner = () => (
  <SideBannerContainer>
    <BannerContent>
      <BannerTitle>Promoções Especiais</BannerTitle>
      <BannerSubtitle>
        Não perca nossas
        <br />
        ofertas exclusivas!
      </BannerSubtitle>
      <CTAButton>Saiba Mais</CTAButton>
    </BannerContent>
  </SideBannerContainer>
);

export default SideBanner;
