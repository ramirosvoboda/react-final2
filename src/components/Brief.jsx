// src/components/Brief.jsx
import React from 'react';

const Brief = ({ cart }) => {
  return (
    <div>
      <h3>Resumen de Compras</h3>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price} $ = {item.quantity * item.price} $
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brief;
