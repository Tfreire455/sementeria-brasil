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

const HomePageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 1rem; /* Adiciona um pouco de padding ao redor da página */
`;

const DivMargin = styled.div`
  margin: 1rem 10px;
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
      <DivMargin>
        <ProductCarousel products={products} />
      </DivMargin>
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
