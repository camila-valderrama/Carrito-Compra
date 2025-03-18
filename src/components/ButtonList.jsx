import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../hooks/useCart'; // Importamos el hook del carrito

const ButtonList = ({ SidebarOpen }) => {
    const { cart } = useCart(); // Obtener el carrito desde el contexto

    // Calcular el total de productos en el carrito
    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <motion.button
            className="fixed bottom-6 right-6 bg-red-700 dark:bg-black text-white font-medium py-3 px-5 rounded-full border-1 shadow-lg flex items-center space-x-2"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={SidebarOpen}
        >
            <i className="bi bi-cart" />
            <span>Mi Carrito</span>

            {/* Mostrar el número de productos en el carrito */}
            {totalItems > 0 && (
                <span className="ml-2 bg-red-500 dark:bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {totalItems}
                </span>
            )}
        </motion.button>
    );
};

export default ButtonList;
