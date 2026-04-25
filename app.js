import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const form = document.getElementById("login-form");
const mensaje = document.getElementById("mensaje");
const registerBtn = document.getElementById("register");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "tienda.html";
    mensaje.textContent = "✅ Bienvenido";
  } catch (error) {
    mensaje.textContent = "❌ " + error.message;
  }
});

registerBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;



  try {
    await createUserWithEmailAndPassword(auth, email, password);
    mensaje.textContent = "✅ Cuenta creada";
  } catch (error) {
    mensaje.textContent = "❌ " + error.message;
  }
});
registerBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    mensaje.textContent = "⚠️ Completa todos los campos";
    return;
  }

  if (!email.includes("@")) {
    mensaje.textContent = "⚠️ Email inválido";
    return;
  }

  if (password.length < 6) {
    mensaje.textContent = "⚠️ La contraseña debe tener al menos 6 caracteres";
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    mensaje.textContent = "✅ Cuenta creada";

    // REDIRECCIÓN AUTOMÁTICA
    window.location.href = "tienda.html";

  } catch (error) {
    mensaje.textContent = "❌ " + error.message;
  }
});