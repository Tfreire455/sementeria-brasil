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
  height: 100%; /* Ajuste a altura conforme necessário */
  width: 100%;
  overflow: hidden;
  &:hover .overlay {
    opacity: 1;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 30px 2rem; /* Ajuste o padding conforme necessário */
  position: relative;
  z-index: 0;
`;

const BannerTitle = styled.h1`
  font-size: 3rem; /* Ajuste o tamanho da fonte conforme necessário */
  margin-bottom: 1rem;
  z-index: 1;
`;

const BannerSubtitle = styled.p`
  font-size: 1.5rem; /* Ajuste o tamanho da fonte conforme necessário */
  margin-bottom: 2rem;
  z-index: 1;
`;

const CTAButton = styled.button`
  padding: 0.75rem 1.5rem; /* Ajuste o padding conforme necessário */
  border: none;
  background-color: #ff0084;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Gradiente escuro com opacidade */
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
              backgroundSize: "cover",
              backgroundPosition: "center",
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
              backgroundSize: "cover",
              backgroundPosition: "center",
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
              backgroundSize: "cover",
              backgroundPosition: "center",
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
