import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext'; // Importa el provider
import { ThemeProvider } from './context/ThemeContext'; // Importamos el ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Envolvemos la app en ThemeProvider */}
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);

