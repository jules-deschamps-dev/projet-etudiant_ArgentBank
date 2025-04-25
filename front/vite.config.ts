import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['.'] // Permet l'accès aux fichiers en dehors du projet
    }
  }
});
