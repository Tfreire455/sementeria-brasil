import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

// Estilização do Footer
const FooterContainer = styled.footer`
  padding: 1rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: #4caf50;
  text-decoration: none;
  margin: 0 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

// Estilização dos ícones sociais
const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const WhatsappIcon = styled(FaWhatsapp)`
  &:hover {
    color: #25d366;
  }
`;

const InstagramIcon = styled(FaInstagram)`
  &:hover {
    color: #ff0084;
  }
`;

// Componente SocialIcons
const SocialIcons = (whatsappNumber, texto, instagram) => {
  const whatsappMessage = encodeURIComponent(texto);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <SocialIconsContainer>
      <IconLink href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <WhatsappIcon />
      </IconLink>
      <IconLink href={instagram} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </IconLink>
    </SocialIconsContainer>
  );
};

// Componente Footer
const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Sementeria Brasil. Todos os direitos reservados.</p>
    <p>
      <FooterLink to="/privacy-policy">Política de Privacidade</FooterLink> |
      <FooterLink to="/terms">Termos e Condições</FooterLink>
    </p>
    <p>Contato: sementeriabrasil@gmail.com | (11) 94422-0143</p>
    <p>Redes Sociais:</p>
    <SocialIcons
      whatsappNumber={5511944220143}
      texto="Olá, gostaria de conhecer mais sobre os seus produtos!"
      instagram="https://www.instagram.com/sementeriabrasil/"
    />
  </FooterContainer>
);

export default Footer;
