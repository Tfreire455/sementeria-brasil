import React from "react";
import styled from "styled-components";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialIconsContainer = styled.div`
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
    color: #25d366;
  }
`;

const InstagramIcon = styled(FaInstagram)`
  &:hover {
    color: #ff0084;
  }
`;

const SocialIcons = ( whatsappNumber, texto, instagram ) => {
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
export default SocialIcons;
