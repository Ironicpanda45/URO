document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario');
  const ventana = document.getElementById('ventana-emergente');
  const cerrar = document.getElementById('cerrar-ventana');
  const mensaje = document.getElementById('mensaje-emergente');

  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    mensaje.textContent = `  Recibimos tu mensaje, ${nombre}. Pronto te contactaremos.`;

    ventana.style.display = 'flex';
    formulario.reset();
  });

  cerrar.addEventListener('click', function () {
    ventana.style.display = 'none';
  });
});
