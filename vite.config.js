import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    port: 5180,
    host: '127.0.0.1',
    // 剧情 md 在项目根目录的 story/ 下，允许 dev server 读取
    fs: { allow: ['..'] },
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
});
