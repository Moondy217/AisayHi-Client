import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // 이 설정을 추가하여 JSX 파일을 인식하도록 합니다.
    include: /src\/.*\.jsx?$/, // 필요한 파일 경로를 지정합니다.
  },
});