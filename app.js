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

  const email = email.value;
  const password = password.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    mensaje.textContent = "Bienvenido";
  } catch (error) {
    mensaje.textContent = error.message;
  }
});

registerBtn.addEventListener("click", async () => {
  const email = email.value;
  const password = password.value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    mensaje.textContent = "Cuenta creada";
  } catch (error) {
    mensaje.textContent = error.message;
  }
});