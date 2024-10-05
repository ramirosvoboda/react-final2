// src/components/ItemDetailContainer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productsData from '../data/products.json';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = productsData.find(item => item.id === parseInt(id));

  return (
    <div>
      <h1>Detalles del Producto</h1>
      {product ? <ItemDetail product={product} /> : <p>Producto no encontrado.</p>}
    </div>
  );
};

export default ItemDetailContainer;
