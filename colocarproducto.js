document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {
    cargarProductoEspecifico(productId);
  } else {
    window.location.href = 'Catalogo.html';
  }
});

function cargarProductoEspecifico(productId) {
  fetch('productos.json')
    .then(response => response.json())
    .then(productos => {
      const producto = productos.find(p => p.id === productId);

      if (producto) {
        mostrarProducto(producto);
      } else {
        window.location.href = 'Catalogo.html';
      }
    })
    .catch(error => {
      console.error('Error cargando el producto:', error);
      window.location.href = 'Catalogo.html';
    });
}

function mostrarProducto(producto) {
  const imgElement = document.getElementById('producto-imagen');
  imgElement.src = producto.imagen;
  imgElement.alt = producto.titulo;

  document.getElementById('producto-titulo').textContent = producto.titulo;
  document.getElementById('producto-descripcion').textContent = producto.descripcion || 'Descripción no disponible';

  const tamanosContainer = document.getElementById('tamanos-container');
  tamanosContainer.innerHTML = '';

  if (producto.tamanos && producto.tamanos.length > 0) {
    producto.tamanos.forEach((tamano, index) => {
      const boton = document.createElement('button');
      boton.textContent = tamano.nombre;
      boton.classList.add('boton-tamano');

      boton.addEventListener('click', () => {
        actualizarPrecio(tamano.precio);

        // Quitar clase 'activo' de todos los botones
        document.querySelectorAll('#tamanos-container .boton-tamano').forEach(btn => {
          btn.classList.remove('activo');
        });

        // Agregar clase 'activo' al botón seleccionado
        boton.classList.add('activo');
      });

      tamanosContainer.appendChild(boton);

      // Activar por defecto el primer botón
      if (index === 0) {
        boton.classList.add('activo');
        actualizarPrecio(tamano.precio);
      }
    });
  } else {
    tamanosContainer.innerHTML = '<p>No hay tamaños disponibles</p>';
  }
}

function actualizarPrecio(precio) {
  document.getElementById('precio').textContent = `Precio: $${precio}`;
}