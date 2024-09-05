import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.95)
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Logo = styled(Link)`
  height: 80px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const LogoImage = styled(motion.img)`
  height: 100%;
  display: block;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1));
`;

const LogoText = styled.h1`
  margin: auto auto;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  font-family: "Merriweather", serif;
  text-align: center;
`;

const LogoTextMain = styled.span`
  display: block;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

const LogoTextSub = styled.span`
  display: block;
  font-size: 1.5rem; /* Mesmo tamanho que o texto principal */
  font-weight: bold;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  position: relative;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
  &:hover {
    color: #ff0084;
    transform: translateY(-3px);
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 100%;
    background: #ff0084;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
`;

const SearchBarContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBar = styled(motion.input)`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  &:focus {
    border-color: #ff0084;
    box-shadow: 0 0 5px rgba(255, 0, 132, 0.5);
    outline: none;
  }
`;

const SearchIcon = styled(motion.span)`
  position: absolute;
  right: 0.5rem;
  color: #ddd;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #ff0084;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #333;
  font-size: 1.5rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const WhatsappIcon = styled(FaWhatsapp)`
  &:hover {
    color: #25d366; /* Cor verde ao passar o mouse */
  }
`;

const InstagramIcon = styled(FaInstagram)`
  &:hover {
    color: #ff0084; /* Mantém a cor rosa para o Instagram */
  }
`;

const whatsappNumber = 5511944220143;
const whatsappMessage = encodeURIComponent(
  "Olá, gostaria de saber mais informações sobre os produtos da Sementeria Brasil!"
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const Header = () => (
  <HeaderContainer
    initial={{ y: -50 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <LogoContainer>
      <Logo to="/">
        <LogoImage
          src={logo}
          alt="Sementeria Brasil"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </Logo>
      <LogoText>
        <LogoTextMain>Sementeria</LogoTextMain>
        <LogoTextSub>Brasil</LogoTextSub>
      </LogoText>
    </LogoContainer>
    <Nav>
      <NavLink to="/">Início</NavLink>
      <NavLink to="/products">Produtos</NavLink>
      <NavLink to="/about">Sobre Nós</NavLink>
      <NavLink to="/contact">Contato</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </Nav>
    <SocialIcons>
      <IconLink href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <WhatsappIcon />
      </IconLink>
      <IconLink
        href="https://www.instagram.com/seu-perfil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </IconLink>
    </SocialIcons>
    <SearchBarContainer
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <SearchBar
        type="text"
        placeholder="Buscar produtos..."
        whileFocus={{ scale: 1.05 }}
      />
      <SearchIcon whileHover={{ scale: 1.2 }}>🔍</SearchIcon>
    </SearchBarContainer>
  </HeaderContainer>
);

export default Header;
