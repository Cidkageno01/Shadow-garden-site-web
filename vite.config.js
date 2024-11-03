import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    hmr: true, // Changez à `false` pour désactiver le rafraîchissement à chaud si nécessaire.
  },
  build: {
    outDir: 'dist', // Dossier de sortie que Vercel utilisera pour servir les fichiers.
  },
});
