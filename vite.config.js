import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        programa: resolve(__dirname, 'programa.html'),
        talleres: resolve(__dirname, 'talleres.html'),
        tallerAusencia: resolve(__dirname, 'taller-ausencia.html'),
        precios: resolve(__dirname, 'precios.html'),
        sobreDiana: resolve(__dirname, 'sobre-diana.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
    },
  },
  server: {
    port: 8088,
    strictPort: true,
    open: false,
  },
});
