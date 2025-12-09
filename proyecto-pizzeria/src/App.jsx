import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import Registro from './components/Registro.jsx';
import Login from './components/Login.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      {/*<Registro/>
       <Home 
        title="Bienvenidos a Pizzería Mamma Mia"
        description="¡Tenemos las mejores pizzas que podras encontrar!"
      />
      <div className='contenedorCards'>
            <Card 
             image="https://plus.unsplash.com/premium_photo-1733266807710-f8f8de34416f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             title="Pizza Napolitana"
             text="Mozzarella, Tomate, Jamón, Albahaca" 
              price="7.950"
              />
            <Card 
              image="https://images.unsplash.com/photo-1671572579989-fa11cbd86eef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Pizza Hawaiana"
              text="Mozzarella, Jamón, Piña, Orégano, Salsa de Tomate"
              price="6.950"
              />
            <Card 
              image="https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Pizza Pepperoni"
              text="Pepperoni, Mozzarella, Salsa de Tomate, Orégano"
              price="5.950"
              />
      </div> */}
      <Login/>
      <Footer/>
    </>
  )
}

export default App
