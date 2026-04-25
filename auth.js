import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDLOxDUbUTa5kAX_ZvwH7NmggOO-kxkM2M",
    authDomain: "ventas-pc-9d265.firebaseapp.com",
    projectId: "ventas-pc-9d265",
    storageBucket: "ventas-pc-9d265.firebasestorage.app",
    messagingSenderId: "141433685680",
    appId: "1:141433685680:web:992795effa34c833531d75"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login exitoso");
    window.location.href = "ventas.html"; // redirige al CRUD
  } catch (error) {
    alert("Error: " + error.message);
  }
};