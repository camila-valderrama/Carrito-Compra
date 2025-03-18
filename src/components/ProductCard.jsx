import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart'; // Importar el hook del carrito

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setInCart(cart.some(item => item.id === product.id));
  }, [cart, product.id]);

  const handleClick = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="border p-4 m-2 dark:bg-gray-400 rounded-md shadow-lg text-center w-64 h-[400px] flex flex-col justify-between">
      {/* Imagen con tamaño fijo */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-48 h-48 mx-auto object-contain rounded-md"
      />

      {/* Nombre del producto con límite de líneas */}
      <h2 className="text-lg font-bold mt-2 line-clamp-2">{product.name}</h2>

      {/* Precio */}
      <p className="text-gray-600 dark:text-black">Precio: ${product.price.toFixed(2)}</p>

      {/* Botón siempre alineado abajo */}
      <button
        className={`mt-auto px-4 py-2 rounded text-white ${
          inCart ? 'bg-red-500 dark:bg-gray-700 hover:bg-red-700 dark:hover:bg-black' : 'bg-green-500 dark:bg-gray-700 hover:bg-green-700 dark:hover:bg-black'
        }`}
        onClick={handleClick}
      >
        {inCart ? 'Quitar del carrito' : 'Añadir al carrito'}
      </button>
    </div>
  );
};

export default ProductCard
