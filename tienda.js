// Asegúrate de que tienda.html cargue Firebase y auth.js

const tiendaList = document.getElementById('product-list'); // ID de tu lista en tienda.html

// Mostrar Productos en la Tienda (Read)
function renderTienda() {
    tiendaList.innerHTML = '';
    // Solo mostramos los productos en stock
    db.collection('productos').where('enStock', '==', true).orderBy('nombre').onSnapshot((querySnapshot) => {
        tiendaList.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const productCard = document.createElement('div');
            productCard.classList.add('login-card'); // Usa tus clases de CSS
            productCard.style.maxWidth = '300px';
            productCard.style.margin = '20px';
            productCard.style.padding = '20px';
            productCard.innerHTML = `
                <img src="${data.imagenUrl}" alt="${data.nombre}" style="width: 100%; border-radius: 10px; margin-bottom: 15px;">
                <h3>${data.nombre}</h3>
                <p>$${data.precio}</p>
                <button class="action-btn" onclick="agregarAlCarrito('${data.nombre}', ${data.precio})" style="width: 100%; background-color: #00acee;">Agregar</button>
            `;
            tiendaList.appendChild(productCard);
        });
    });
}

// Lógica de carrito básica (puedes reutilizar la que ya tienes)
function agregarAlCarrito(nombre, precio) {
    alert(`Agregado: ${nombre} - $${precio}`);
    // Aquí implementa tu lógica de carrito real (ej. guardar en localStorage)
}

// Cargar la tienda al iniciar
renderTienda();