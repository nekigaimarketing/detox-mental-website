# Detox Mental Wellness — Sitio Web Oficial & Landing Pages de Alta Conversión

Sitio web oficial y arquitectura de embudos de alta conversión para **Lic. Diana Molina** (*Detox Mental Wellness*). Desarrollado con HTML5 semántico, CSS modular con tokens de diseño, JavaScript moderno y Vite, optimizado para conversión móvil, velocidad de carga instantánea y despliegue continuo.

---

## 🌟 Estructura del Sitio y Páginas

1. **`index.html` (Homepage)** — Posicionamiento de marca *"El Tóxico Eres Tú"*, deconstrucción del autoengaño, método de 5 Pilares, test diagnóstico interactivo de fuga emocional y prueba social con reseñas reales.
2. **`programa.html` (El Método de los 5 Pilares)** — Desglose clínico profundo de los 5 pilares (*Proteger, Regular, Reconstruir, Conectar, Crear*) con herramientas prácticas y temario.
3. **`talleres.html` (Hub de Talleres Online)** — Calendario y catálogo de masterclasses y seminarios temáticos interactivos en vivo vía Zoom.
4. **`taller-ausencia.html` (Landing Page de Alta Conversión)** — Embudo de ventas del taller *"Aprender a Vivir con la Ausencia"* estructurado bajo las metodologías de **Russell Brunson** (Epiphany Bridge & Value Stack), **Alex Hormozi** (Grand Slam Offer & Garantía Condicional) y **Grant Cardone** (Cost of Inaction & Urgencia de Cierre). Incluye contenedor de video de ventas 16:9 y escalera de valor de 3 niveles ($397, $697 y $800 MXN).
5. **`precios.html` (Planes e Inversión)** — Matriz comparativa de planes de acompañamiento (Básico, VIP y Premium) con downsell inteligente.
6. **`sobre-diana.html` (Biografía y Autoridad)** — Historia de Diana Molina, credenciales como Psicóloga Clínica con enfoque cognitivo-conductual (TCC) y filosofía "Tough Love".
7. **`contacto.html` (Admisión y Contacto)** — Formulario de postulación directa y enlace a WhatsApp para triaje personalizado.

---

## 🛠️ Stack Tecnológico

- **Bundler:** Vite 5
- **Estilos:** CSS3 Custom Properties (Vanilla) con paleta Forest Emerald (`#032b21`), Champagne Gold (`#d4af37`), Cream Canvas (`#fdfbf7`) y Dark Slate.
- **Interactividad:** Test diagnóstico interactivo de 3 pasos, selector de eslogan dinámico, acordeones de FAQ, modales y renderizador de valor.
- **Optimización de Medios:** Imágenes en formato WebP con fallbacks JPG de alta densidad y carga perezosa (`loading="lazy"`).
- **Despliegue:** GitHub Pages (Automated Workflow) y Cloudflare Pages.

---

## 🚀 Desarrollo Local

Para correr el proyecto en entorno local:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo en puerto 8088
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar compilación de producción
npm run preview
```

---

## 🌐 Despliegue en Cloudflare Pages (Recomendado para Producción con Dominio Propio)

1. Ingresa a [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Ve a **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Selecciona el repositorio `nekigaimarketing/detox-mental-website`.
4. Configuración de Build:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Haz clic en **Save and Deploy**.
6. Agrega el dominio personalizado de Diana (ej. `detoxmentalwellness.com` o `dianamolina.com`).

---

© 2026 Detox Mental Wellness. Diseñado y gestionado por Nekigai Marketing.
