import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Importa Firestore correctamente

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ Evitar comportamiento por defecto

    try {
      const user = await authenticateUser(email, password);
      console.log("Usuario autenticado:", user); // 🔍 Debug: Ver si Firebase devuelve el usuario

      // 🔍 Verificar si el usuario está autenticado antes de consultar Firestore
      if (!user || !user.uid) {
        console.error("No se pudo obtener el usuario");
        return;
      }

      // Obtener el rol desde Firestore
      const userDoc = await getDoc(doc(db, "usuarios", user.uid));

      // Si el documento no existe, asignar un rol por defecto
      const role = userDoc.exists() ? userDoc.data().role : "user";

      console.log("Rol obtenido:", role); // 🔍 Debug: Ver si se está obteniendo correctamente

      // Redirigir según el rol
      navigate(role === "admin" ? "/admin" : "/user");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
