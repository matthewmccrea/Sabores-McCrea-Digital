# Sabor Villa Crespo

Landing page de Sabor Villa Crespo, rotisería casera: menú del día, pedidos por WhatsApp y horarios. Hecha con HTML, CSS y JS, sin frameworks ni build.

## Estructura

```
.
├── index.html       # Estructura de la página
├── css/
│   └── styles.css   # Estilos (colores y fuentes en variables de :root)
└── js/
    └── main.js      # Datos editables y armado de links
```

## Cómo verla

Abrí `index.html` en el navegador. No hace falta instalar nada.

Para probarla con un servidor local:

```bash
npx serve .
# o
python -m http.server
```

## Editar los datos del local

Todo se cambia desde el objeto `CONFIG` al principio de `js/main.js`:

```js
const CONFIG = {
  telefono: "11 5555-1234",
  direccion: "Av. Corrientes 5480, Villa Crespo",
  diaMenu: "",            // vacío = muestra el día actual automáticamente
  mensajeWhatsApp: "¡Hola! Quería hacer un pedido para hoy.",
};
```

- **telefono**: se muestra en la página y se usa para armar el link de `wa.me`.
- **direccion**: aparece en el ticket, la sección "Dónde" y el footer, y arma el link de Google Maps.
- **diaMenu**: el texto que aparece al lado de "La pizarra de hoy".
- **mensajeWhatsApp**: el texto que llega precargado al abrir el chat.

En el HTML, los elementos con `data-bind="..."` reciben estos valores, y los links con `data-href="wa"` o `data-href="mapa"` reciben las URLs generadas.

## Editar el menú y los precios

El menú está escrito directamente en `index.html`, dentro de `<section id="pizarra">`. Cada plato es un `<li>`:

```html
<li><span>Milanesa con puré</span><span class="dots"></span><span class="mono gold">$7.400</span></li>
```

Los horarios, las zonas y el costo de envío están en el ticket de `<section id="donde">`.

## Estilos

La paleta y las fuentes están definidas como variables en `css/styles.css`:

| Variable  | Uso                     |
|-----------|-------------------------|
| `--cream` | Fondo general           |
| `--ink`   | Texto                   |
| `--red`   | Acento principal        |
| `--gold`  | Precios y destacados    |
| `--board` | Pizarra y cinta superior |

Fuentes: Bowlby One (títulos), Work Sans (texto) y DM Mono (precios y detalles), cargadas desde Google Fonts.

## Pendientes

- [ ] Cargar el teléfono y la dirección reales
- [ ] Ajustar las coordenadas del mapa de OpenStreetMap en `index.html`
- [ ] Reemplazar las fotos de ejemplo por fotos propias

## Créditos

Fotos de ejemplo: [Wikimedia Commons](https://commons.wikimedia.org/).
