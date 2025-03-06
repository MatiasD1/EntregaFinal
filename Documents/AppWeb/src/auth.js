// auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

// Función para autenticar al usuario
export const authenticateUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error de autenticación", error);
    throw error; // Retornar error para manejarlo en el componente
  }
};

// Función para registrar un nuevo usuario
export const registerUser = async (email, password, role) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar el rol del usuario en Firestore
    await setDoc(doc(db, "usuarios", user.uid), {
      email: email,
      role: role,
    });

    return user; // Retornar el usuario registrado
  } catch (error) {
    console.error("Error de registro", error);
    throw error; // Retornar error para manejarlo en el componente
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Usuario deslogueado con éxito");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};
