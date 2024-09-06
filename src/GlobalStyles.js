// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";
import backImg from "./assets/4577.jpg";
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-green: #00571D;
    --secondary-yellow: #FFDE20;
    --light-green: #90ff1D90;
  }

  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif; /* Exemplo de uso */
    color: #333;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${backImg});
    background-size: contain;
    background-position: center;


  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--dark-green);
  }

  a {
    text-decoration: none;
    color: var(--light-green);
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-yellow);
    }
  }

  button {
    background-color: var(--primary-green);
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--light-green);
    }
  }
`;

export default GlobalStyle;
