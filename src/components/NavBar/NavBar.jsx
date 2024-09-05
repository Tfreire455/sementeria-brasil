import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import SearchBar from "../SearchBar";

// Estilos para a navbar e links
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: ${({ visible }) => (visible ? "0" : "-100px")};
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 10px;
  }
`;

const LogoContent = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color, #ff0084);
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    z-index: 999;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff0084;
    transform: translateY(-3px);
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

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
  transform-origin: 1px;

  &:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  &:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const SearchBarWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <NavbarContainer visible={visible}>
      <LogoContent>
        <Logo />
      </LogoContent>

      <Hamburger open={isOpen} onClick={toggleMenu}>
        <Line open={isOpen} />
        <Line open={isOpen} />
        <Line open={isOpen} />
      </Hamburger>

      <NavLinks open={isOpen}>
        <li>
          <NavLink to="/" className="nav-link center">
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav-link center">
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link center">
            Sobre Nós
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link center">
            Contato
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="nav-link center">
            Blog
          </NavLink>
        </li>
      </NavLinks>

      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
