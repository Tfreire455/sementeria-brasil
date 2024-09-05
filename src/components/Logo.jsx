import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import logo from "../assets/logo.png";

const LogoContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;

const LogoLink = styled(Link)`
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
  margin: auto 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  font-family: "Merriweather", serif;
`;

const LogoTextMain = styled.span`
  display: block;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

const LogoTextSub = styled.span`
  display: s;
  font-size: 1.5rem; /* Mesmo tamanho que o texto principal */
  font-weight: bold;
  text-transform: uppercase;
`;

export const Logo = () => (
  <>
    <LogoContainer>
      <LogoLink to="/">
        <LogoImage
          src={logo}
          alt="Sementeria Brasil"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </LogoLink>
      <LogoText>
        <LogoTextMain>Sementeria</LogoTextMain>
        <LogoTextSub>Brasil</LogoTextSub>
      </LogoText>
    </LogoContainer>
  </>
);
