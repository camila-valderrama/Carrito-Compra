import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart'; // Importar el hook del carrito

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart(); // Acceder al carrito global
  const [inCart, setInCart] = useState(false);

  // Verificar si el producto ya está en el carrito
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
    <div className="border p-4 m-2 rounded-md shadow-lg text-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 mx-auto object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">Precio: ${product.price.toFixed(2)}</p>
      
      <button
        className={`mt-2 px-4 py-2 rounded text-white ${
          inCart ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'
        }`}
        onClick={handleClick}
      >
        {inCart ? 'Quitar del carrito' : 'Añadir al carrito'}
      </button>
    </div>
  );
};

export default ProductCard;
