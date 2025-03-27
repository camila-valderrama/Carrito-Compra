import React from 'react';
import { useCart } from '../hooks/useCart'; // Importamos el hook del carrito

const SideBar = ({ onClose }) => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, emptyCart } = useCart();
  const placeholderImage = 'https://via.placeholder.com/100x150?text=No+Image';

  // Calcular el total del carrito
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  return (
    <div className="p-6 bg-orange-100 dark:bg-gray-100 w-80 h-full shadow-lg flex flex-col">
      {/* Contenedor del título y botón de cerrar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-red-700 dark:text-black">Carrito de Compras</h1>
        <i className="bi bi-x-circle text-3xl cursor-pointer text-gray-700 dark:text-gray-500 hover:text-red-500 dark:hover:text-black" onClick={onClose}></i>
      </div>

      {/* Lista de productos */}
      {cart.length > 0 ? (
        <ul className="space-y-4 flex-grow overflow-y-auto">
          {cart.map((product) => (
            <li key={product.id} className="p-4 bg-white dark:bg-gray-500 rounded-lg shadow-md flex items-center space-x-4">
              <img
                src={product.image !== 'N/A' ? product.image : placeholderImage}
                alt={product.name}
                className="w-16 h-24 rounded-md object-contain"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-800 dark:text-white">{product.name}</p>
                <p className="text-gray-600 dark:text-gray-300">${product.price.toFixed(2)} x {product.cantidad}</p>
                <p className="font-bold text-black">Total: ${(product.price * product.cantidad).toFixed(2)}</p>

                {/* Controles de cantidad */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="bg-gray-300 dark:bg-gray-600 dark:text-white px-2 py-1 rounded"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className="font-bold dark:text-white">{product.cantidad}</span>
                  <button
                    className="bg-gray-300 dark:bg-gray-600 dark:text-white px-2 py-1 rounded"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </div>

                {/* Botón para quitar completamente el producto */}
                <button
                  className="bg-red-600 dark:bg-gray-600 hover:bg-gray-700 dark:hover:bg-black text-white font-medium py-1 px-3 mt-2 rounded-full text-sm"
                  onClick={() => removeFromCart(product.id)}
                >
                  Quitar
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-black text-center mt-4">El carrito está vacío.</p>
      )}

      {/* Precio total del carrito */}
      {cart.length > 0 && (
        <div className="mt-4 p-4 bg-white dark:bg-gray-600 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-red-700 dark:text-white">Total del carrito:</h2>
          <p className="text-xl font-bold text-black">${totalPrice.toFixed(2)}</p>
      {/* Botón para vaciar el carrito */}
        <button
            className="bg-red-600 dark:bg-gray-600 hover:bg-gray-700 dark:hover:bg-black text-white font-medium py-1 px-3 mt-2 rounded-full text-sm"
            onClick={() => emptyCart()}
            >
            Vaciar carrito
          </button>
        </div>
      )}

    </div>

    


  );
};

export default SideBar

