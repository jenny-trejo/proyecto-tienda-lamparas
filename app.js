// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDq96DmifjGKblR_p2fEmFDlch8Boq9Ta4",
  authDomain: "proyecto-tienda-lamparas.firebaseapp.com",
  projectId: "proyecto-tienda-lamparas",
  storageBucket: "proyecto-tienda-lamparas.firebasestorage.app",
  messagingSenderId: "272544835885",
  appId: "1:272544835885:web:2d87c382dbf8f665800ba4"
};
// Inicializar
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// CREATE
window.crearVenta = async () => {
  const producto = document.getElementById("producto").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);

  await addDoc(collection(db, "ventas"), {
    producto,
    precio,
    cantidad,
    fecha: new Date().toISOString()
  });

  alert("Venta guardada");
  leerVentas();
};

// READ
async function leerVentas() {
  const lista = document.getElementById("listaVentas");
  lista.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "ventas"));

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();

    const li = document.createElement("li");
    li.innerHTML = `
      ${data.producto} - $${data.precio} - Cant: ${data.cantidad}
      <button onclick="eliminarVenta('${docSnap.id}')">Eliminar</button>
      <button onclick="editarVenta('${docSnap.id}', '${data.producto}', ${data.precio}, ${data.cantidad})">Editar</button>
    `;

    lista.appendChild(li);
  });
}

// DELETE
window.eliminarVenta = async (id) => {
  await deleteDoc(doc(db, "ventas", id));
  leerVentas();
};

// UPDATE
window.editarVenta = async (id, producto, precio, cantidad) => {
  const nuevoProducto = prompt("Producto:", producto);
  const nuevoPrecio = prompt("Precio:", precio);
  const nuevaCantidad = prompt("Cantidad:", cantidad);

  await updateDoc(doc(db, "ventas", id), {
    producto: nuevoProducto,
    precio: parseFloat(nuevoPrecio),
    cantidad: parseInt(nuevaCantidad)
  });

  leerVentas();
};

// Inicializar lectura
leerVentas();

