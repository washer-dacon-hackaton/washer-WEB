import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite에서 절대경로 설정할 수 있는 파일.
// import할 때 경로를 더 깔끔하게 가져올 수 있음.
// TS의 경우는 tsconfig.json에서 추가적인 설정이 필요함.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
