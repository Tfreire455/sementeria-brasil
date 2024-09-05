// src/pages/CartPage.js
import React from 'react';
import CartItem from '../components/CartItem';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartPage = () => {
  const cartItems = [
    // Exemplo de itens no carrinho
    { id: 1, name: 'Arroz Integral', quantity: 2, price: 10 },
    { id: 2, name: 'Feijão Preto', quantity: 1, price: 8 }
  ];

  return (
    <CartContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h2>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
    </CartContainer>
  );
};

export default CartPage;
