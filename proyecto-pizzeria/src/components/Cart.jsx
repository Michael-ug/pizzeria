import { useState } from "react";
import { pizzaCart as initialCart } from "../assets/Pizzas";
import "./Cart.css";

function Cart() {

  const [cart, setCart] = useState(initialCart);

  const handleIncrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
          : item
      )
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

return (
  <div className="contenedor">
    <h2>Detalles del pedido</h2>

    {cart.map((pizza) => (
      <div className="carrito" key={pizza.id}>
        <img
          className="imagen"
          src={pizza.img}
          alt={pizza.name}
        />

        <div className="info">
          <h5>{pizza.name}</h5>

          <p>
            Precio: ${pizza.price} x {pizza.count} = $
            {pizza.price * pizza.count}
          </p>

          <div className="botones">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => handleDecrease(pizza.id)}
            >
              -
            </button>

            <button
              className="btn btn-sm btn-primary"
              onClick={() => handleIncrease(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    ))}

    <h4>Total: ${total}</h4>
    <button className="btn btn-dark">Pagar</button>
  </div>
);

}

export default Cart;