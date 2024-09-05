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
`;

const PageContainer = styled.div`
  display: flex;
  padding: 2rem;
  height: 100%;
  align-items: center; /* Alinha os itens no topo */
  justify-content: space-between;
  gap: 30px;
`;

const ProductsContainer = styled.div`
  flex: 1;
  overflow: hidden; /* Garante que o scroll não afete a tela inteira */
`;

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001");
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
