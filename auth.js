import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebase.js"; // Asegúrate de exportar 'app' en firebase.js

const auth = getAuth(app);

export const registrar = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Usuario registrado con éxito");
    } catch (error) {
        alert("Error: " + error.message);
    }
};

// EXTREMADAMENTE IMPORTANTE para que el onclick del HTML funcione:
window.registrar = registrar;
