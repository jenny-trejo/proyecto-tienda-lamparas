// Reutiliza la inicialización de firebase que tienes en auth.js
// auth.js debe tener algo como esto:
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const storage = firebase.storage();
  async function guardarProducto() {
    // Verifica que estos IDs coincidan con tu HTML
    const nombre = document.getElementById('p-name').value;
    const precio = document.getElementById('p-price').value;
    const urlImagen = document.getElementById('p-image').value;

    if (!nombre || !precio || !urlImagen) {
        alert("Por favor rellena todos los campos");
        return;
    }

    try {
        await db.collection('productos').add({
            nombre: nombre,
            precio: parseFloat(precio),
            imagenUrl: urlImagen,
            enStock: true
        });

        alert("¡Producto guardado exitosamente!");
        location.reload(); // Esto limpia los campos
    } catch (error) {
        console.error("Error al guardar:", error);
        alert("Error de Firebase: " + error.message);
    }
}

// 2. Agregar o Editar un Producto (Create / Update)
productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('p-name').value;
    const price = parseFloat(document.getElementById('p-price').value);
    const stock = document.getElementById('p-stock').checked;
    const fileInput = document.getElementById('p-image');
    const file = fileInput.files[0];

    try {
        let imagenUrl = '';

        if (editingProductId) {
            // --- ACTUALIZAR MODO ---
            const doc = await db.collection('productos').doc(editingProductId).get();
            const oldData = doc.data();
            imagenUrl = oldData.imagenUrl;

            // Si se seleccionó un nuevo archivo, súbelo
            if (file) {
                const storageRef = storage.ref(`productos/${file.name}`);
                const snapshot = await storageRef.put(file);
                imagenUrl = await snapshot.ref.getDownloadURL();
            }

            await db.collection('productos').doc(editingProductId).update({
                nombre: name,
                precio: price,
                imagenUrl: imagenUrl,
                enStock: stock
            });

            editingProductId = null;
            submitBtn.textContent = 'Agregar Producto';
            alert('Producto actualizado exitosamente');

        } else {
            // --- CREAR MODO ---
            if (!file) { alert('Debes seleccionar una imagen'); return; }

            const storageRef = storage.ref(`productos/${file.name}`);
            const snapshot = await storageRef.put(file);
            imagenUrl = await snapshot.ref.getDownloadURL();

            await db.collection('productos').add({
                nombre: name,
                precio: price,
                imagenUrl: imagenUrl,
                enStock: stock
            });

            alert('Producto agregado exitosamente');
        }

        productForm.reset();
        fileInput.required = true; // Restaurar required para crear

    } catch (error) {
        console.error("Error al procesar producto: ", error);
        alert('Hubo un error. Revisa la consola para más detalles.');
    }
});

// 3. Eliminar Producto (Delete)
function deleteProduct(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        db.collection('productos').doc(id).delete()
            .then(() => {
                alert('Producto eliminado');
            })
            .catch((error) => {
                console.error("Error al eliminar: ", error);
            });
    }
}

// 4. Cambiar el Estado de Stock (Update Parcial)
function toggleStock(id, currentStock) {
    db.collection('productos').doc(id).update({
        enStock: !currentStock
    })
    .then(() => {
        alert('Estado de stock actualizado');
    })
    .catch((error) => {
        console.error("Error al actualizar stock: ", error);
    });
}

// 5. Preparar para Editar
function editProduct(id) {
    db.collection('productos').doc(id).get()
        .then((doc) => {
            if (doc.exists) {
                const data = doc.data();
                document.getElementById('p-name').value = data.nombre;
                document.getElementById('p-price').value = data.precio;
                document.getElementById('p-stock').checked = data.enStock;
                document.getElementById('p-image').required = false; // Imagen no es obligatoria en editar

                editingProductId = id;
                submitBtn.textContent = 'Guardar Cambios';
                window.scrollTo(0, 0); // Desplazarse hacia arriba
            }
        });
}

// Cargar la tabla al iniciar
renderTable();