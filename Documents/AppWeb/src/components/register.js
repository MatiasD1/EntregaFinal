// Register.js
import React, { useState } from "react";
import { registerUser } from "../auth"; // Importa la función de registro

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Por defecto el rol es "user"

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(email, password, role);
      console.log("Usuario registrado:", user);
    } catch (error) {
      console.error("Error al registrar usuario", error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
