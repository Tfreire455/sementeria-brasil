import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination'; // Importando o componente Pagination
import { motion } from 'framer-motion';

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:10px;
  padding: 1rem;
  margin-top:110px;
  
  @media (max-width: 768px) {
    margin-top:220px;
  }
`;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Defina quantos itens por página

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://sementeriaapi.onrender.com/');
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Lógica para paginação
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <ProductContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default ProductPage;
