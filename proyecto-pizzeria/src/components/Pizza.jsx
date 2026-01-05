import { useState, useEffect } from "react";
import "./Pizza.css";

function Pizza({ pizzaId = "p001" }) {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas") 
      .then(res => res.json())
      .then(data => {
        console.log("Datos recibidos:", data); 
        const pizzaFound = data.find(p => p.id === pizzaId);
        console.log("Pizza encontrada:", pizzaFound);
        setPizza(pizzaFound);
      })
      .catch(err => console.error("Error al cargar la pizza:", err));
  }, [pizzaId]);

  if (!pizza) return <p>No se encontró la pizza</p>;

  return (
    <div className="pizza-detail">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
      <p>{pizza.desc}</p>
      <p><strong>Precio:</strong> ${pizza.price}</p>
    </div>
  );
}

export default Pizza;
