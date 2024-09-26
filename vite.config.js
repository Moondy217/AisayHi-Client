import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),  // svgr 플러그인 추가
  ],
  server: {
    port: 5174  // 포트 번호
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
  },
});