import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBarInput = styled(motion.input)`
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

function SearchBar() {
  return (
    <SearchBarContainer
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <SearchBarInput
        type="text"
        placeholder="Buscar produtos..."
        whileFocus={{ scale: 1.05 }}
      />
      <SearchIcon whileHover={{ scale: 1.2 }}>🔍</SearchIcon>
    </SearchBarContainer>
  );
}

export default SearchBar;
