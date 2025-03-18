import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import SideBar from './SideBar';
import { animaciones } from '../utils/animations';
import ButtonList from './ButtonList';
import { useCart } from '../hooks/useCart'; // Importamos el contexto del carrito

const Body = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useCart(); // Acceder al carrito
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const SidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const SidebarClose = () => {
    setIsSidebarOpen(false);
  };

  // Obtener productos de la API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Fake Store API
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  return (
    <div className='flex flex-col min-h-screen dark:bg-black'>
      {/* Sidebar del carrito */}
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div
            variants={animaciones()}
            initial='initial_menu'
            animate='animate_menu'
            exit='exit_menu'
            transition={{ duration: 1 }}
            className='fixed top-0 right-0 bg-white w-80 h-full z-50 shadow-lg overflow-y-auto'
          >
            <SideBar onClose={SidebarClose} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Título */}
      <h1 className='flex p-10 text-5xl text-red-700 dark:text-white font-bold justify-center'>Tienda Online</h1>

      {/* Botón para abrir el carrito */}
      <ButtonList SidebarOpen={SidebarOpen} />

      {/* Lista de productos */}
      <div className='flex flex-wrap justify-center mx-auto flex-grow gap-4 p-4'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.title, // Fake Store API usa "title"
              price: product.price,
              image: product.image,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Body
