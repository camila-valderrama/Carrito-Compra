import React from 'react';
import ThemeToggle from './ThemeToggle'; // Importamos el botón de cambio de tema

const Header = () => {
    return (
        <header className='bg-orange-400 dark:bg-gray-500 py-4 px-6 shadow-md flex items-center justify-between text-white text-2xl font-bold'>
            {/* Logo y título */}
            <div className="flex items-center">
                <img src='/carrito-de-compras.png' alt='Compras Logo' className='h-10 w-10 mr-4' />
                Compra Ya
            </div>

            {/* Botón de cambio de tema */}
            <ThemeToggle />
        </header>
    );
};

export default Header;
