import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'; // Opcional para estilos

function NotFound() {
  return (
    <div className="notfound-container contenedor" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="principal">404</h1>
      <h2 className="secundario">¡Ups! Página no encontrada</h2>
      <p>La ruta a la que intentas acceder no existe, por lo que, te recomendamos.</p>
      <Link to="/" className="btn btn-primary">
        🏠 Vuelve al inicio 🍕
      </Link>
    </div>
  );
}

export default NotFound;