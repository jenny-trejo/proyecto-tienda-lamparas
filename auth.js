import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDq96DmifjGKblR_p2fEmFDlch8Boq9Ta4",
    authDomain: "proyecto-tienda-lamparas.firebaseapp.com",
    projectId: "proyecto-tienda-lamparas",
    storageBucket: "proyecto-tienda-lamparas.firebasestorage.app",
    messagingSenderId: "272544835885",
    appId: "1:272544835885:web:2d87c382dbf8f665800ba4"
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
    window.location.href = "index.html";
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
    window.location.href = "index.html"; // redirige al CRUD
  } catch (error) {
    alert("Error: " + error.message);
  }
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();