// src/components/CartWidget.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useCart();
  
  return (
    <div>
      <span>Carrito: {cart.length} productos</span>
    </div>
  );
};

export default CartWidget;
