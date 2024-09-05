import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import ProductCarousel from "../components/ProductCarousel";
import AboutUs from "../components/AboutUs";
import Certifications from "../components/Certifications";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Promotions from "../components/Promotions";
import NewsletterSignup from "../components/NewsletterSignup";
import styled from "styled-components";
import axios from "axios";
import SideBanner from "../components/BannerSide";

const HomePageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 1rem; /* Adiciona um pouco de padding ao redor da página */
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; /* Adiciona mais espaço entre os itens */
  }
`;

const ProductsContainer = styled.div`
  flex: 2; /* Aumenta o espaço do carrossel */
  overflow: hidden;
`;

const SideBannerContainer = styled.div`
  flex: 1; /* Ocupa menos espaço em comparação ao carrossel */
`;

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://sementeriaapi.onrender.com`);
        setProducts(response.data.items || []);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <HomePageContainer>
      <Banner />
      <PageContainer>
        <SideBanner />
        <ProductsContainer>
          <ProductCarousel products={products} />
        </ProductsContainer>
      </PageContainer>
      <AboutUs />
      <Certifications />
      <Testimonials />
      <Blog />
      <Promotions />
      <NewsletterSignup />
    </HomePageContainer>
  );
};

export default HomePage;
