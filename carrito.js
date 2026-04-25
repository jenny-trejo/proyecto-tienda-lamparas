const productos = [
  { id: 1, nombre: "Lámpara LED", precio: 20 },
  { id: 2, nombre: "Lámpara Vintage", precio: 35 },
  { id: 3, nombre: "Lámpara RGB", precio: 50 }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const lista = document.getElementById("lista");
const totalEl = document.getElementById("total");

let total = 0;

carrito.forEach(id => {
  const prod = productos.find(p => p.id === id);
  total += prod.precio;

  const div = document.createElement("div");
  div.textContent = prod.nombre + " - $" + prod.precio;
  lista.appendChild(div);
});

totalEl.textContent = "Total: $" + total;

function comprar() {
  alert("Compra realizada ✅");
  localStorage.removeItem("carrito");
  location.reload();
}