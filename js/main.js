// ==========================================================
// Sabor Villa Crespo — datos editables y enlaces
// ==========================================================

// Editá acá los datos del local.
const CONFIG = {
  telefono: "11 5555-1234",
  direccion: "Av. Corrientes 5480, Villa Crespo",
  // Si lo dejás vacío, se muestra el día actual automáticamente.
  diaMenu: "",
  mensajeWhatsApp: "¡Hola! Quería hacer un pedido para hoy.",
};

const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function diaMenu() {
  if (CONFIG.diaMenu) return CONFIG.diaMenu;
  return DIAS[new Date().getDay()] + " · se renueva cada mañana";
}

// "11 5555-1234" -> "5491155551234" (formato internacional para wa.me)
function numeroWhatsApp(telefono) {
  const local = telefono.replace(/\D/g, "").replace(/^0/, "").replace(/^11/, "");
  return ("54911" + local).slice(0, 13);
}

function init() {
  const valores = {
    telefono: CONFIG.telefono,
    direccion: CONFIG.direccion,
    diaMenu: diaMenu(),
  };

  const enlaces = {
    wa: "https://wa.me/" + numeroWhatsApp(CONFIG.telefono) +
        "?text=" + encodeURIComponent(CONFIG.mensajeWhatsApp),
    mapa: "https://www.google.com/maps/search/?api=1&query=" +
          encodeURIComponent(CONFIG.direccion + ", CABA"),
  };

  document.querySelectorAll("[data-bind]").forEach((el) => {
    el.textContent = valores[el.dataset.bind] ?? "";
  });

  document.querySelectorAll("[data-href]").forEach((el) => {
    const href = enlaces[el.dataset.href];
    if (href) el.href = href;
  });
}

document.addEventListener("DOMContentLoaded", init);
