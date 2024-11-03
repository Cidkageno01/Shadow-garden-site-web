import { defineConfig } from 'vite';

// Configuration de Vite
export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: false, // Désactive HMR (Hot Module Replacement)
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        apropos: './apropos.html',
        galerie: './galerie.html',
        musique: './musique.html',
        videos: './videos.html',
      }
    }
  }
});
