import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from '../components/NavBar.jsx';
import Home from '../pages/Home.jsx';
import Pizza from '../pages/Pizza.jsx';
import Footer from '../components/Footer.jsx';
import Registro from '../pages/Registro.jsx';
import Login from '../pages/Login.jsx';
import Cart from '../pages/Cart.jsx';
import Profile from '../components/Profile.jsx';
import NotFound from '../components/NotFound.jsx';

import { CartProvider } from '../Context/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <div className='d-flex flex-column min-vh-100'>
      <NavBar />
      <div className='flex-grow-1'>
      <Routes>
        <Route
          path="/"
          element={<Home title="Bienvenidos a Pizzería Mamma Mia" description="¡Tenemos las mejores pizzas que podrás encontrar!" />}
        />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile userEmail="usuario@example.com" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
