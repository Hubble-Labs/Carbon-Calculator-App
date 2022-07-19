import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';


export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: env === 'production' ? 'My site' : `My site [${env.toUpperCase()}]`,
        },
      },
    }),
    react({
        // Use React plugin in all *.jsx and *.tsx files
        include: '**/*.{jsx,tsx}',
    }),
  ],
});