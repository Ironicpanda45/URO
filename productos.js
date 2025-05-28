function cargarProductos({ limite = null, contenedorId = 'productsGrid' } = {}) {
  fetch('productos.json')
    .then(response => response.json())
    .then(data => {
      if (limite) data = data.slice(-limite).reverse();
      renderProducts(data, contenedorId);
    })
    .catch(error => console.error('Error cargando productos:', error));
}

function renderProducts(productos, contenedorId) {
  const grid = document.getElementById(contenedorId);
  if (!grid) return;

  grid.innerHTML = '';
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <div class="product-image">
        <div class="product-image-container">
          <div class="product-image-wrapper">
            ${producto.etiqueta ? `<div class="product-badge ${producto.etiqueta.toLowerCase()}">${producto.etiqueta}</div>` : ''}
            <img src="${producto.imagen}" alt="${producto.titulo}" onerror="this.onerror=null;this.src='Img/default.png';">
            <img src="${producto.imagenAlt}" alt="Vista alternativa" class="product-image-hover" onerror="this.onerror=null;this.src='Img/default.png';">
          </div>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-title">${producto.titulo}</h3>
        <div class="product-price">
          <span class="current-price">Estimado: $${producto.precio}</span>
        </div>
          <a href="producto.html?id=${producto.id}" class="view-article">Ver producto</a>
      </div>
    `;
    grid.appendChild(card);
  });
}