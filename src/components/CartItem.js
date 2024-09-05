// src/components/CartItem.js
import React from 'react';
import styled from 'styled-components';

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItem = ({ item }) => (
  <CartItemContainer>
    <ItemDetails>
      <h3>{item.name}</h3>
      <p>Quantidade: {item.quantity}</p>
      <p>Preço: ${item.price}</p>
    </ItemDetails>
    <p>Total: ${item.price * item.quantity}</p>
  </CartItemContainer>
);

export default CartItem;
