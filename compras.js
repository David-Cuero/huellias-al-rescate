// NUMERO DE WHATSAPP CON CODIGO DE PAIS (Ejemplo: 573001234567 o 52155...)
const NUMERO_WHATSAPP = "573044652507";

// LISTA DE 10 PRODUCTOS VETERINARIOS CON INFORMACIÓN COMPLETA
const products = [
  {
    id: 1,
    name: "Alimento NutriPaw Premium",
    category: "Nutrición",
    price: 34.50,
    shortDesc: "Fórmula balanceada con pollo fresco y arroz integral para perros adultos.",
    fullDesc: "Alimento super premium diseñado para satisfacer todas las necesidades nutricionales de tu perro. Enriquecido con vitaminas A, D3, E y ácidos grasos Omega 3 y 6.",
    usage: "Servir la porción recomendada según el peso de la mascota. Mantener agua fresca disponible.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500"
  },
  {
    id: 2,
    name: "Pipeta Antiparasitaria FleaGuard",
    category: "Salud",
    price: 13.00,
    shortDesc: "Protección total contra pulgas, garrapatas y ácaros para gatos.",
    fullDesc: "Tratamiento de aplicación tópica directa sobre la piel de la nuca. Elimina parásitos en menos de 24 horas y previene nuevas infestaciones hasta por 30 días.",
    usage: "Aplicar la pipeta completa separando el pelo de la nuca. No bañar a la mascota 48h antes ni después.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500"
  },
  {
    id: 3,
    name: "Champú Hipoalergénico Avena",
    category: "Higiene",
    price: 16.50,
    shortDesc: "Fórmula suave con aloe vera y extracto de avena para piel sensible.",
    fullDesc: "Limpia profundamente reduciendo la picazón e irritaciones de la piel. Mantiene el pelaje sedoso, brillante y con un aroma suave y duradero.",
    usage: "Aplicar sobre el pelo mojado, masajear suavemente hasta formar espuma y enjuagar con abundante agua.",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=500"
  },
  {
    id: 4,
    name: "Cama Confort Ortopédica",
    category: "Accesorios",
    price: 48.00,
    shortDesc: "Espuma viscoelástica para un descanso óptimo y alivio articular.",
    fullDesc: "Cama ultra suave diseñada ergonómicamente para proteger las articulaciones de perros mayores o con displasia. Funda lavable y base antideslizante.",
    usage: "Apta para lavadora (retirar el relleno antes de lavar la funda).",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=500"
  },
  {
    id: 5,
    name: "Mordedor Dental ChewJoy",
    category: "Juguetes",
    price: 9.00,
    shortDesc: "Caucho natural no tóxico que limpia encías y reduce el sarro.",
    fullDesc: "Juguete interactivo diseñado con cerdas de goma flexibles. Entretiene a la mascota mientras promueve una higiene bucal saludable y combate el aburrimiento.",
    usage: "Puede rellenarse con snacks o pasta dental canina para mayor estimulación.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500"
  },
  {
    id: 6,
    name: "Multivitamínico VitalPet",
    category: "Salud",
    price: 19.90,
    shortDesc: "Suplemento integral para reforzar defensas y movilidad.",
    fullDesc: "Jarabe/comprimidos palatables sabor a hígado. Contiene glucosamina, condroitina y complejo B para reforzar huesos, defensas y vitalidad general.",
    usage: "Suministrar 1 tableta/dosis diaria mezclada con el alimento.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500"
  },
  {
    id: 7,
    name: "Cepillo Deslanador MagicFur",
    category: "Higiene",
    price: 15.00,
    shortDesc: "Remueve hasta el 90% del pelo suelto sin dañar la piel.",
    fullDesc: "Borde de acero inoxidable de precisión que atraviesa el pelaje superior para retirar suavemente la capa inferior de pelo muerto sin cortar la piel.",
    usage: "Usar 1 a 2 veces por semana con pasadas suaves en dirección al crecimiento del pelo.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500"
  },
  {
    id: 8,
    name: "Snacks Dentales FreshBite",
    category: "Premios",
    price: 11.50,
    shortDesc: "Premios masticables para refrescar el aliento y eliminar placa.",
    fullDesc: "Premios 100% digestibles con textura especial que limpia zonas difíciles de alcanzar. Ayuda a controlar la acumulación de sarro y mal aliento.",
    usage: "Dar 1 snack por día como premio o recompensa.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500"
  },
  {
    id: 9,
    name: "Collar Antiparasitario Protect8",
    category: "Salud",
    price: 26.00,
    shortDesc: "8 meses de protección continua contra garrapatas y pulgas.",
    fullDesc: "Matriz de polímero avanzada que libera gradualmente sus ingredientes activos. Resistente al agua e inodoro para máxima comodidad.",
    usage: "Ajustar al cuello dejando 2 dedos de espacio entre el collar y la piel.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500"
  },
  {
    id: 10,
    name: "Placa Identificación Inox",
    category: "Accesorios",
    price: 8.00,
    shortDesc: "Chapa de acero inoxidable grabada a fuego con nombre y teléfono.",
    fullDesc: "Placa liviana, ultrarresistente al desgaste y no se oxida. Incluye argolla reforzada para enganchar al collar.",
    usage: "Indicar el nombre de la mascota y número de contacto tras la compra.",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500"
  }
];

let cart = [];

// RENDERIZAR PRODUCTOS EN EL CATÁLOGO
function renderProducts() {
  const container = document.getElementById("productsContainer");
  container.innerHTML = products.map(product => `
    <div class="product-card" onclick="openProductModal(${product.id})">
      <div class="product-img-wrapper">
        <span class="badge-cat">${product.category}</span>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-short-desc">${product.shortDesc}</p>
        <div class="product-bottom">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="btn-card-add" onclick="event.stopPropagation(); addToCart(${product.id})">
            + Agregar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ABRIR MODAL CON DETALLE DE PRODUCTO
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <div class="modal-img-container">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal-info">
      <div>
        <span class="modal-tag">${product.category}</span>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-price">$${product.price.toFixed(2)}</div>
        <p class="modal-desc">${product.fullDesc}</p>
        <div class="modal-extra">
          <strong>🐾 Modo de Uso / Indicaciones:</strong><br>
          ${product.usage}
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-modal-add" onclick="addToCart(${product.id}); closeProductModalForce();">
          <i class="fa-solid fa-cart-plus"></i> Agregar al Carrito
        </button>
      </div>
    </div>
  `;

  document.getElementById("productModalOverlay").classList.add("active");
}

function closeProductModal(event) {
  if (event.target.id === "productModalOverlay") {
    document.getElementById("productModalOverlay").classList.remove("active");
  }
}

function closeProductModalForce() {
  document.getElementById("productModalOverlay").classList.remove("active");
}

// FUNCIONES DEL CARRITO DE COMPRAS
function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
  }
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const cartBody = document.getElementById("cartBody");
  const cartBadge = document.getElementById("cartBadge");
  const cartTotalAmount = document.getElementById("cartTotalAmount");

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  cartBadge.innerText = totalCount;
  cartTotalAmount.innerText = `$${totalPrice.toFixed(2)}`;

  if (cart.length === 0) {
    cartBody.innerHTML = `<div class="empty-msg">Tu carrito está vacío 🐾</div>`;
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="btn-qty" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="btn-qty" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="btn-remove" onclick="removeFromCart(${item.id})">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

function toggleCart() {
  document.getElementById("cartOverlay").classList.toggle("active");
  document.getElementById("cartDrawer").classList.toggle("active");
}

// ENVIAR PEDIDO POR WHATSAPP
function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    alert("Agrega al menos un producto al carrito antes de pedir.");
    return;
  }

  const name = document.getElementById("clientName").value.trim();
  const address = document.getElementById("clientAddress").value.trim();

  if (!name || !address) {
    alert("Por favor completa tu nombre y dirección de entrega.");
    return;
  }

  let message = `*¡Hola! Deseo realizar un pedido en Buscando Huellitas:*\n\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📍 *Dirección:* ${address}\n\n`;
  message += `📦 *Detalle del Pedido:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}\n`;
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  message += `\n💰 *Total a pagar:* $${total.toFixed(2)}\n\n`;
  message += `¡Quedo a la espera de sus datos bancarios o confirmación! 🐾`;

  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// INICIALIZAR
renderProducts();
updateCartUI();