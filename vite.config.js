import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // default settings on build (i.e. fail on error)
      ...eslintPlugin({ cache: false }),
      apply: 'build',
    },
    {
      // do not fail on serve (i.e. local development)
      ...eslintPlugin({
        failOnWarning: false,
        failOnError: false,
        cache: false,
      }),
      apply: 'serve',
      enforce: 'post',
    },
  ],
});
