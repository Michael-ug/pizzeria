import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Registro.css';

function Registro() {
const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    alert("Registro Terminado con Éxito!");
    console.log("Formulario enviado:", formData);

  };

  return (
    <div className="contenedor">
      <form className="registro" onSubmit={handleSubmit}>
        <h2>Registrate ahora</h2>
        
      <div className="email">
        <p>Todos los campos son obligatorios</p>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contraseña">
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          text="Debe tener al menos 6 caracteres"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="confirmarContraseña">
        <label>Confirmar contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      
    </form>
    <Button className="boton" variant="dark" type="submit">Registrarse</Button>
    </div>
  );
}
export default Registro;