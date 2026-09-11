function abrirModal(titulo, categoria, precio, descripcion, imagenUrl, notaTitulo, notaTexto) {
  document.getElementById('modalTitulo').innerText = titulo;
  document.getElementById('modalCategoria').innerText = categoria;
  document.getElementById('modalPrecio').innerText = precio;
  document.getElementById('modalDesc').innerText = descripcion;
  document.getElementById('modalImg').src = imagenUrl;
  document.getElementById('modalNotaTitulo').innerText = notaTitulo;
  document.getElementById('modalNotaTexto').innerText = notaTexto;

  document.getElementById('modalDetalle').classList.add('activo');
}

function cerrarModal() {
  document.getElementById('modalDetalle').classList.remove('activo');
}

function cerrarModalAfuera(event) {
  if (event.target.id === 'modalDetalle') {
    cerrarModal();
  }
}