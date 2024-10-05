import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, removeItem, clearCart } = useCart();

  // Calcular el total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Función para manejar la compra
  const handlePurchase = () => {
    const total = calculateTotal();
    alert(`Gracias por tu compra. Total: $${total}`);
    // Aquí podrías agregar lógica para finalizar la compra
    clearCart(); // Limpiar el carrito después de la compra
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Limpiar Carrito</button>
          {/* Botón de compra */}
          <button onClick={handlePurchase} style={{ marginLeft: '10px' }}>
            Comprar
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
