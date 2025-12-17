import './Home.css';
import pizzas from '../assets/Pizzas';
import CardPizza from './CardPizza'; 

function Home({ title, description }) {
  return (
    <>
      <div className="home-container">
        <div className='texto'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {pizzas.map((pizza) => (
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