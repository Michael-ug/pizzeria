import Pizzas from "../assets/Pizzas";

function CardPizza({ pizza }) {
  return (
    <div className="card h-100">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />

      <div className="card-body">
        <h5 className="card-title text-capitalize">{pizza.name}</h5>

        <p className="card-text">{pizza.desc}</p>

        <h6>Ingredientes:</h6>
        <ul className="list-group list-group-flush mb-3">
          {pizza.ingredients.map((ingredient, index) => (
            <li className="list-group-item" key={index}>
              🍕 {ingredient}
            </li>
          ))}
        </ul>

        <p className="fw-bold">Precio: ${pizza.price}</p>
      </div>
    </div>
  );
}

export default CardPizza;