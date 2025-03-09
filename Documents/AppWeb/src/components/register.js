import React, { useState } from "react";
import { db } from "../firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    marcaAuto: "",
    modeloAuto: "",
    dominioAuto: "",
    licencia: "",
    aliasBancario: "",
    aceptaTerminos: false,
  });
  const [message, setMessage] = useState("");  // Estado para el mensaje de éxito o error
  const navigate = useNavigate();

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Avanzar y retroceder pasos
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Enviar datos a Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "usuarios"), {
        ...formData,
        timestamp: new Date(),
      });
      console.log("Datos enviados a Firestore correctamente");
      setMessage("Registro exitoso"); 
      setStep(5);
      navigate("/login");
      } catch (error) {
      console.error("Error al enviar datos a Firestore:", error);
      setMessage("Hubo un error al registrar. Inténtalo nuevamente.");
      setStep(5);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Registrar</h1>

        {step === 1 && (
          <>
            <h2>Datos personales</h2>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required />
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required />
            <button type="button" onClick={nextStep}>Siguiente</button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Datos del vehículo</h2>
            <input type="text" name="marcaAuto" value={formData.marcaAuto} onChange={handleChange} placeholder="Marca del auto" required />
            <input type="text" name="modeloAuto" value={formData.modeloAuto} onChange={handleChange} placeholder="Modelo del auto" required />
            <input type="text" name="dominioAuto" value={formData.dominioAuto} onChange={handleChange} placeholder="Dominio del auto" required />
            <input type="text" name="licencia" value={formData.licencia} onChange={handleChange} placeholder="Número de licencia" required />
            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="button" onClick={nextStep}>Siguiente</button>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Datos bancarios</h2>
            <input type="text" name="aliasBancario" value={formData.aliasBancario} onChange={handleChange} placeholder="Alias bancario" required />
            <label>
              <input type="checkbox" name="aceptaTerminos" checked={formData.aceptaTerminos} onChange={handleChange} required />
              Acepto los términos y condiciones
            </label>
            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="button" onClick={nextStep}>Siguiente</button>
          </>
        )}

        {step === 4 && (
          <>
            <h2>Confirmar Datos</h2>
            <p><strong>Nombre:</strong> {formData.nombre} {formData.apellido}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Teléfono:</strong> {formData.telefono}</p>
            <p><strong>Auto:</strong> {formData.marcaAuto} {formData.modeloAuto}</p>
            <p><strong>Dominio:</strong> {formData.dominioAuto}</p>
            <p><strong>Licencia:</strong> {formData.licencia}</p>
            <p><strong>Alias bancario:</strong> {formData.aliasBancario}</p>
            <p><strong>Aceptó términos:</strong> {formData.aceptaTerminos ? "Sí" : "No"}</p>
            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="submit">Registrar</button>
          </>
        )}
        {step === 5 && (
          <>
            <h2>{message}</h2>
            <button type="button" onClick={() => setStep(1)}>Continuar al sitio</button>
          </>
        )}      
        </form>
    </div>
  );
};

export default Register;