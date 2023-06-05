import { defineConfig } from "vite"
import vue from '@vite/plugin-vue'

//https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: "/test"
})