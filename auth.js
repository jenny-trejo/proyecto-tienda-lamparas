const productos = [
  {
    nombre: "Lámpara Moderna",
    precio: 500,
    imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  },
  {
    nombre: "Lámpara de Escritorio",
    precio: 300,
    imagen: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
  },
  {
    nombre: "Lámpara Colgante",
    precio: 700,
    imagen: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
  }
];

const catalogo = document.getElementById("catalogo");
const carrito = [];
const listaCarrito = document.getElementById("listaCarrito");
const totalElemento = document.getElementById("total");
const contador = document.getElementById("contadorCarrito");

/* MOSTRAR PRODUCTOS */
productos.forEach((p, index) => {
  const div = document.createElement("div");
  div.classList.add("producto");

  div.innerHTML = `
    <img src="${p.imagen}">
    <h4>${p.nombre}</h4>
    <p>$${p.precio}</p>
    <button onclick="agregarCarrito(${index})">Agregar</button>
  `;

  catalogo.appendChild(div);
});

/* AGREGAR AL CARRITO */
window.agregarCarrito = (index) => {
  carrito.push(productos[index]);
  actualizarCarrito();
};

/* ACTUALIZAR */
function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((p, i) => {
    total += p.precio;

    const li = document.createElement("li");
    li.innerHTML = `
      ${p.nombre} - $${p.precio}
      <button onclick="eliminar(${i})">❌</button>
    `;
    listaCarrito.appendChild(li);
  });

  totalElemento.textContent = total;
  contador.textContent = carrito.length;
}

/* ELIMINAR */
window.eliminar = (i) => {
  carrito.splice(i, 1);
  actualizarCarrito();
};