import { useForm } from "react-hook-form";

const preguntas = [
  "Género",
  "Nombre Completo",
  "Edad",
  "¿Cuál es tu motivo de consulta?",
];

const tipoInputs = {
  "Género": "select",
  "Nombre Completo": "text",
  "Edad": "number",
  "¿Cuál es tu motivo de consulta?": "text"
};

const Formulario = () => {
  const { register, formState: { errors}, handleSubmit, setValue, watch, trigger } = useForm();
  const indice = watch("indice") || 0; // Controlar el índice con react-hook-form
  const preguntaActual = preguntas[indice];
  const tipoInput = tipoInputs[preguntaActual];
  
  const onSubmit = (data) => {
    console.log("Respuestas enviadas:", data);
  };

  const handleNext = async () => {

    const esValido = await trigger(`respuesta_${indice}`); 
    if (!esValido) return; 

    if (indice < preguntas.length - 1) {
      setValue("indice", indice + 1);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Formulario</h1>
      <label>{preguntas[indice]}</label>
      
      {tipoInput === "select" ? (
        <select {...register(`respuesta_${indice}`, { required: true })}>
          <option value="">Selecciona una opción</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
          <option value="otro">Otro</option>
        </select>
      ) : (
        <input
          type={tipoInput}
          {...register(`respuesta_${indice}`, {
            required: true,
            ...(tipoInput === "number" && { min: 1 }), // Validación extra para edad
          })}
        />
      )}
      {errors[`respuesta_${indice}`]?.type === 'required' && <p>Complete el campo para continuar</p>}
      <button type="button" onClick={handleNext}>
        {indice < preguntas.length - 1 ? "Siguiente" : "Enviar"}
      </button>
    </form>
  );
};

export default Formulario;
