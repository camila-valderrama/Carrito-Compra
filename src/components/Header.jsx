import React from 'react';

const Header = () => {
    return (
        <header className='bg-orange-400 py-4 px-6 shadow-md flex items-center text-white text-2xl font-bold'>
            <img src='/carrito-de-compras.png' alt='Watchlist Logo' className='h-10 w-10 mr-4' />
            Compra Ya 
        </header>
    );
};

export default Header