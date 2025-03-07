import React from "react";

const AuthForm = ({ title, buttonText, handleSubmit, email, setEmail, password, setPassword }) => {
  return (
    <div className="authContainer">
      <form className="formContainer" onSubmit={handleSubmit}>
        <h2>{title}</h2>
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
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default AuthForm;
