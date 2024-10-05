// src/components/ItemDetail.jsx
import React from 'react';
import AddItemButton from './AddItemButton';
import { useCart } from '../context/CartContext';

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Precio: ${product.price}</p>
      <p>Descripción: {product.detail}</p>
      <AddItemButton onClick={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;
