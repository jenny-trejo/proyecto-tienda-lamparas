// REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Cuenta creada en Lumina 💡");
    window.location.href = "index.html"; // 👈 CORRECTO
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
    alert("Bienvenido a Lumina 💡");
    window.location.href = "tienda.html"; // 👈 CORRECTO
  } catch (error) {
    alert("Error: " + error.message);
  }
};