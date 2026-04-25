const productos = [
  { id: 1, nombre: "Lámpara LED", precio: 20 },
  { id: 2, nombre: "Lámpara Vintage", precio: 35 },
  { id: 3, nombre: "Lámpara RGB", precio: 50 }
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${p.nombre}</h3>
    <p>$${p.precio}</p>
    <button onclick="agregar(${p.id})">Agregar</button>
  `;
  contenedor.appendChild(div);
});

function agregar(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado");
}