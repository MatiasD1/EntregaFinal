import React, { useState } from "react";
import { registerUser } from "../auth";
import AuthForm from "./authForm"; // Importa el formulario reutilizable

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(email, password);
      console.log("Usuario registrado:", user);
    } catch (error) {
      console.error("Error al registrar usuario", error);
    }
  };

  return (
    <AuthForm
      title="Registro"
      buttonText="Registrar"
      handleSubmit={handleRegister}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default Register;
