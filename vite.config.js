import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '')
    return {
        root: 'src',
        publicDir: '../public',
        build: {
          // Relative to the root
          outDir: '../dist',
        },
        plugins: [
            react({
                // Use React plugin in all *.jsx and *.tsx files
                include: '**/*.{jsx,tsx}',
            })
        ],
        define: {
            __APP_ENV__: env.APP_ENV
        }
    }
})
