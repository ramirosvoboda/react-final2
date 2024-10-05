import React from 'react';
import ItemList from './ItemList';
import products from '../data/products.json';
import '../styles/ItemListContainer.css'; // Importa el archivo CSS

const ItemListContainer = () => {
  return (
    <div className="item-list-container"> {/* Aplica la clase aquí */}
      <h2>Productos</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
