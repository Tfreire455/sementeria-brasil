// src/components/Banner.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import bannerImg1 from "../assets/banner.jpg";
import bannerImg2 from "../assets/banner2.jpg";
import bannerImg3 from "../assets/banner3.jpg";

const BannerContainer = styled.div`
  position: relative;
  height: 300px; /* Define uma altura fixa para o banner */
  width: 100%;
  top: 100px;
  margin-bottom: 100px;
  overflow: hidden;
  &:hover .overlay {
    opacity: 1;
  }
  @media (max-width: 768px) {
    top: 200px;
  }

  @media (max-width: 480px) {
    top: 200px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  height: 300px; /* O conteúdo ocupará toda a altura do contêiner */
  width: 100%;
  padding: 30px 2rem;
  position: relative;
  z-index: 0;
  background-size: cover; /* Garante que a imagem cubra todo o espaço */
  background-position: center; /* Centraliza a imagem */

  @media (max-width: 768px) {
    padding: 20px 1rem;
  }

  @media (max-width: 480px) {
    padding: 15px 0.5rem;
  }
`;

const BannerTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  z-index: 1;
  border-radius: 16px;
  padding: 10px 25px;
  font-weight: bold;
  background-color: var(--light-green);
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  z-index: 1;
  color: var(--dark-green);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: #009994;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
`;

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <BannerContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Slider {...settings}>
        <div>
          <BannerContent
            style={{
              backgroundImage: `url(${bannerImg1})`,
            }}
          >
            <Overlay className="overlay" />
            <BannerTitle>Bem-vindo à Sementeria Brasil!</BannerTitle>
            <BannerSubtitle>
              Descubra os melhores grãos e sementes para seu negócio.
            </BannerSubtitle>
            <CTAButton>Veja Nossos Produtos</CTAButton>
          </BannerContent>
        </div>
        <div>
          <BannerContent
            style={{
              backgroundImage: `url(${bannerImg2})`,
            }}
          >
            <Overlay className="overlay" />
            <BannerTitle>Qualidade e Sabor!</BannerTitle>
            <BannerSubtitle>
              Explore nossa variedade de sementes frescas e naturais.
            </BannerSubtitle>
            <CTAButton>Saiba Mais</CTAButton>
          </BannerContent>
        </div>
        <div>
          <BannerContent
            style={{
              backgroundImage: `url(${bannerImg3})`,
            }}
          >
            <Overlay className="overlay" />
            <BannerTitle>Seu Sucesso Começa Aqui!</BannerTitle>
            <BannerSubtitle>
              Encontre as melhores sementes para o seu cultivo.
            </BannerSubtitle>
            <CTAButton>Confira Nossos Produtos</CTAButton>
          </BannerContent>
        </div>
      </Slider>
    </BannerContainer>
  );
};

export default Banner;
