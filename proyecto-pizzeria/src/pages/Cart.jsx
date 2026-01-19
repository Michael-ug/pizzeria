import { useCart } from "../Context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, increase, decrease, total } = useCart(); // ✅ obtenemos el estado global y funciones

  return (
    <div className="contenedor">
      <h2>Detalles del pedido</h2>
      <div className="contenedor-carrito">
        
      {cart.length === 0 ? (
        <p>El carrito está vacío 🛒</p>
      ) : (
        cart.map((pizza) => (
          <div className="carrito" key={pizza.id}>
            <img className="imagen" src={pizza.img} alt={pizza.name} />

            <div className="info">
              <h5>{pizza.name}</h5>

              <p>
                Precio: ${pizza.price} x {pizza.count} = $
                {pizza.price * pizza.count}
              </p>

              <div className="botones">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => decrease(pizza.id)}
                  >
                  -
                </button>

                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => increase(pizza.id)}
                  >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      <h4>Total: ${total}</h4>
      <button className="btn btn-dark">Pagar</button>
    </div>
  </div>
  );
}

export default Cart;
