import './Home.css';
import { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza'; 

function Home({ title, description }) {
   const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/pizzas')
      .then(res => res.json())
      .then(data => setPizzas(data))
      .catch(err => console.error('Error al cargar pizzas:', err));
  }, []);
    
  return (
    <>
      <div className="home-container">
        <div className='texto'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row cardPizza">
          {pizzas.map(pizza => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;