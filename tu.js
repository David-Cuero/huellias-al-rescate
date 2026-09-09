document.addEventListener('DOMContentLoaded', () => {
  const storyForm = document.getElementById('storyForm');
  const storiesContainer = document.getElementById('storiesContainer');

  cargarHistorias();

  storyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const autor = document.getElementById('autor').value.trim();
    const mascota = document.getElementById('mascota').value.trim();
    const titulo = document.getElementById('titulo').value.trim();
    const historia = document.getElementById('historia').value.trim();

    if (!autor || !mascota || !titulo || !historia) return;

    const nuevaHistoria = {
      id: Date.now(),
      autor,
      mascota,
      titulo,
      historia,
      fecha: new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    guardarHistoria(nuevaHistoria);
    storyForm.reset();
    cargarHistorias();
  });

  function obtenerHistorias() {
    const historias = localStorage.getItem('huellitas_historias');
    return historias ? JSON.parse(historias) : [];
  }

  function guardarHistoria(historia) {
    const historias = obtenerHistorias();
    historias.unshift(historia);
    localStorage.setItem('huellitas_historias', JSON.stringify(historias));
  }

  function cargarHistorias() {
    const historias = obtenerHistorias();
    storiesContainer.innerHTML = '';

    if (historias.length === 0) {
      storiesContainer.innerHTML = `
        <div class="empty-state">
          <p>Aún no hay historias registradas. ¡Sé el primero en compartir la tuya!</p>
        </div>
      `;
      return;
    }

    historias.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'story-card';
      card.innerHTML = `
        <div class="story-badge">🐾 Mascota: ${escapeHTML(item.mascota)}</div>
        <div class="story-header">
          <div>
            <h3 class="story-title">${escapeHTML(item.titulo)}</h3>
            <p class="story-meta">Por ${escapeHTML(item.autor)} • ${item.fecha}</p>
          </div>
        </div>
        <p class="story-body">${escapeHTML(item.historia)}</p>
        <button class="btn-delete" onclick="eliminarHistoria(${item.id})">Eliminar historia</button>
      `;
      storiesContainer.appendChild(card);
    });
  }

  window.eliminarHistoria = function(id) {
    let historias = obtenerHistorias();
    historias = historias.filter(h => h.id !== id);
    localStorage.setItem('huellitas_historias', JSON.stringify(historias));
    cargarHistorias();
  };

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});