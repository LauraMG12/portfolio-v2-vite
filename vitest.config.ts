import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    include: ["**/?(*.){test,spec}.?(c|m)[jt]s?(x)"],
  },
});
