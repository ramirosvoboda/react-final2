// src/components/ItemList.jsx
import React from 'react';
import Item from './Item';
import '../styles/ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
