import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";
import { app } from "./firebase.js";

const auth = getAuth(app);
const db = getFirestore(app);

window.registrar = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // 1. Crea el usuario en Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 2. Guarda los datos en la base de datos Firestore
        // Usamos el UID del usuario como ID del documento para que estén vinculados
        await setDoc(doc(db, "usuarios", user.uid), {
            email: user.email,
            fechaRegistro: new Date().toISOString(),
            rol: "cliente" // Puedes añadir campos extra aquí
        });

        alert("¡Cuenta creada y guardada en la base de datos!");
        window.location.href = "index.html"; // Redirigir después del éxito

    } catch (error) {
        console.error("Error completo:", error);
        alert("Error al registrar: " + error.message);
    }
};