# Despliegue de Cloudflare Worker para Detox Mental Website

Este Worker conecta tu dominio en Cloudflare (ej. `detoxmental.com.mx` o un subdominio gratuito `*.workers.dev`) directamente con tu repositorio de GitHub Pages (`https://nekigaimarketing.github.io/detox-mental-website/`), asegurando:
1. **Streaming fluido del video de 44MB (`Promo Taller Ausencia WEB.mp4`)** con soporte de `Range` bytes sin chocar con el límite de 25MB de Cloudflare Pages.
2. **URLs limpias** (ej. `detoxmental.com.mx/taller-ausencia` carga directo `taller-ausencia.html`).
3. **Caché ultrarrápida en el Edge de Cloudflare** para imágenes, videos y estilos.

---

## Opción 1: Despliegue en 2 minutos desde el Dashboard de Cloudflare (Sin comandos)

1. Entra a [dash.cloudflare.com](https://dash.cloudflare.com/) e inicia sesión.
2. En el menú lateral izquierdo, haz clic en **Workers & Pages** → **Create application** (Crear aplicación).
3. Selecciona la pestaña **Workers** y haz clic en **Create Worker** (Crear Worker).
4. Asigna un nombre al worker (ej. `detox-mental-proxy`) y haz clic en **Deploy** (Desplegar).
5. En la siguiente pantalla, haz clic en **Edit code** (Editar código).
6. Borra todo el código que aparece y pega el contenido completo de [`worker.js`](worker.js).
7. Haz clic en **Save and Deploy** (Guardar y desplegar).
8. **Asignar tu Dominio Personalizado:**
   - Regresa a la configuración del Worker recién creado.
   - Ve a la pestaña **Settings** (Configuración) → **Domains & Routes** (Dominios y rutas).
   - Haz clic en **Add** (Agregar) → **Custom Domain** (Dominio personalizado).
   - Escribe tu dominio (ej. `detoxmental.com.mx` o `taller.detoxmental.com.mx`).
   - Cloudflare configurará automáticamente los certificados SSL y el enrutamiento.

---

## Opción 2: Despliegue con Wrangler CLI

Si tienes instalado Wrangler en tu terminal:

```bash
cd "cloudflare-worker"
npx wrangler deploy
```

---

© 2026 Detox Mental Wellness · Nekigai Marketing
