import React from 'react';
import { useCart } from '../hooks/useCart'; // Importamos el contexto del carrito

const SideBar = ({ onClose }) => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const placeholderImage = 'https://via.placeholder.com/100x150?text=No+Image';

  return (
    <div className="p-6 bg-orange-100 w-80 h-full shadow-lg">
      {/* Contenedor del título y botón de cerrar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-red-700">Carrito de Compras</h1>
        <i className="bi bi-x-circle text-3xl cursor-pointer text-gray-700 hover:text-red-500" onClick={onClose}></i>
      </div>

      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((product) => (
            <li key={product.id} className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
              <img
                src={product.image !== 'N/A' ? product.image : placeholderImage}
                alt={product.name}
                className="w-16 h-24 rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{product.name}</p>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                
                {/* Controles de cantidad */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="bg-gray-300 px-2 py-1 rounded"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className="font-bold">{product.cantidad}</span>
                  <button
                    className="bg-gray-300 px-2 py-1 rounded"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </div>

                {/* Botón para quitar completamente el producto */}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 mt-2 rounded-full text-sm"
                  onClick={() => removeFromCart(product.id)}
                >
                  Quitar
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center mt-4">El carrito está vacío.</p>
      )}
    </div>
  );
};

export default SideBar
