import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import AuthForm from "./authForm"; // Importa el componente reutilizable

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await authenticateUser(email, password);
      if (!user?.uid) return;

      const userDoc = await getDoc(doc(db, "usuarios", user.uid));
      const role = userDoc.exists() ? userDoc.data().role : "user";
      navigate(role === "admin" ? "/admin" : "/user");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <div className="login">
      <AuthForm
        title="Iniciar sesión"
        buttonText="Iniciar sesión"
        handleSubmit={handleLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Login;
