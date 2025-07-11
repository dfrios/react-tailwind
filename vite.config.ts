import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrg from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), tsconfigPaths(), svgrg()],
});
