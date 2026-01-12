import React from "react";
import { useNavigate } from "react-router-dom";
// import './Profile.css'; 

function Profile({ userEmail }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile-container contenedor">
      <h2>Perfil de usuario</h2>
      <p>Email: <strong>{userEmail}</strong></p>
      <button className="btn btn-dark" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Profile;
