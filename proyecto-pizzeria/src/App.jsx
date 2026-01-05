import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Pizza from './components/Pizza.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import Registro from './components/Registro.jsx';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
       {/* <Home 
        title="Bienvenidos a Pizzería Mamma Mia"
        description="¡Tenemos las mejores pizzas que podras encontrar!"
      /> */}
      <Pizza/>
      {/* <Cart/>   */}
      {/* <Registro/> */}
      {/* <Login/> */}
      <Footer/>
    </>
  )
}

export default App
