import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./Login.css"; 

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    alert("Login éxitoso!");
    console.log("Login éxitoso", formData);

  };

  return (
    <div className="contenedor">
      <form className="login" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="email">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          />
        </div>

        <div className="contraseña">
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          />
        </div>

       <Button className="boton" variant="dark" type="submit">Login</Button>
      </form>
    </div>
  );
}

export default Login; 