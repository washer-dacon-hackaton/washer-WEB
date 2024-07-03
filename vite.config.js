import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 절대경로 설정할 때 사용해야 하는 파일.
// 절대경로를 사용하면 import할 때 깔끔하게 컴포넌트를 불러올 수 있음.

// TS에서는 @types/node를 설치하고, tsconfig.json에서 절대경로 설정해줘야함.
// JS에서는 어떻게 해야하는지 알아볼 필요가 있음.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: "./.vite",
});
