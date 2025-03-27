import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
const { cart, setCart } = useContext(CartContext);

  // Agregar producto al carrito (sin duplicarlo, aumentando cantidad)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, cantidad: 1 }];
      }
    });
  };

  // Remover un producto completamente del carrito
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Reducir la cantidad de un producto, pero sin bajar de 1
  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.cantidad > 1 // Solo reduce si cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  //Vaciar la lista del carrito de compras
  const emptyCart = () => {
    setCart(
      []
    )
  }

  return { cart, addToCart, removeFromCart, decreaseQuantity, emptyCart };
};

