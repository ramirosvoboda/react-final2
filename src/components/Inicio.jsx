// src/components/Inicio.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Asegúrate de que el archivo CSS esté importado

const Inicio = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a Nuestra Tienda</h1>
      <p>Descubre una variedad de productos únicos y de alta calidad a precios competitivos.</p>
      <Link to="/products">
        <button className="view-products-button">Ver Productos</button>
      </Link>
    </div>
  );
};

export default Inicio;
