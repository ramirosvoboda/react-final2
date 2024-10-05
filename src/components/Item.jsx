// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AddItemButton from './AddItemButton';
import { useCart } from '../context/CartContext';

const Item = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="item-card">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Precio: ${product.price}</p>
      <Link to={`/products/${product.id}`}>Detalles</Link>
      <AddItemButton onClick={handleAddToCart} />
    </div>
  );
};

export default Item;
