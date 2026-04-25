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