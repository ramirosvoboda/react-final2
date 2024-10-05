// src/components/ItemQuantitySelector.jsx
import React from 'react';

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <input
      type="number"
      value={quantity}
      onChange={handleChange}
      min="1"
      style={{ width: '50px' }}
    />
  );
};

export default ItemQuantitySelector;
