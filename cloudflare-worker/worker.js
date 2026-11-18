/**
 * Cloudflare Worker: Reverse Proxy & Edge Router para Detox Mental Website
 * Conecta tu dominio en Cloudflare (ej. detoxmenta.com.mx) directamente
 * al repositorio y despliegue de GitHub Pages:
 * https://nekigaimarketing.github.io/detox-mental-website/
 * 
 * Desarrollado por Nekigai Marketing.
 */

const GITHUB_PAGES_BASE = "https://nekigaimarketing.github.io/detox-mental-website";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Manejo de URLs amigables
    let pathname = url.pathname;

    // Redirección o resolución de ruta raíz
    if (pathname === "/" || pathname === "") {
      pathname = "/index.html";
    } else if (!pathname.includes(".") && !pathname.endsWith("/")) {
      // Rutas limpias sin extensión (ej. /taller-ausencia -> /taller-ausencia.html)
      pathname = `${pathname}.html`;
    }

    // 2. Construcción de URL de destino en GitHub Pages
    const targetUrl = new URL(GITHUB_PAGES_BASE + pathname + url.search);

    // 3. Preparación de encabezados para GitHub Pages
    const newHeaders = new Headers(request.headers);
    newHeaders.set("Host", "nekigaimarketing.github.io");
    newHeaders.set("Referer", GITHUB_PAGES_BASE + "/");
    newHeaders.delete("cf-connecting-ip");
    newHeaders.delete("cf-ray");
    newHeaders.delete("cf-visitor");

    const newRequest = new Request(targetUrl.toString(), {
      method: request.method,
      headers: newHeaders,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
      redirect: "follow",
    });

    // 4. Estrategia de Caché en Cloudflare Edge
    const isStaticAsset = pathname.match(/\.(mp4|webp|jpg|jpeg|png|svg|css|js|woff2?)$/i);
    const cacheTtl = isStaticAsset
      ? 60 * 60 * 24 * 7 // 7 días para multimedia (video 44MB, fotos, estilos)
      : 60 * 5;          // 5 minutos para páginas HTML (permite actualizar cambios rápido)

    try {
      let response = await fetch(newRequest, {
        cf: {
          cacheTtl: cacheTtl,
          cacheEverything: true,
        },
      });

      // Si la URL limpia con .html da 404, intentar la ruta original
      if (response.status === 404 && pathname.endsWith(".html")) {
        const fallbackUrl = new URL(GITHUB_PAGES_BASE + url.pathname + url.search);
        response = await fetch(new Request(fallbackUrl.toString(), {
          method: request.method,
          headers: newHeaders,
        }));
      }

      // 5. Encabezados de Respuesta Optimizados (Seguridad + Streaming Video)
      const responseHeaders = new Headers(response.headers);
      responseHeaders.set("X-Proxy-Origin", "GitHub Pages (nekigaimarketing)");
      responseHeaders.set("X-Powered-By", "Cloudflare Worker / Nekigai Marketing");
      responseHeaders.set("Access-Control-Allow-Origin", "*");
      responseHeaders.set("X-Content-Type-Options", "nosniff");

      // Soporte estricto de streaming para el video MP4
      if (pathname.endsWith(".mp4")) {
        responseHeaders.set("Accept-Ranges", "bytes");
        responseHeaders.set("Content-Type", "video/mp4");
      }

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    } catch (err) {
      return new Response(
        `Error al comunicar con GitHub Pages: ${err.message}`,
        {
          status: 502,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        }
      );
    }
  },
};
