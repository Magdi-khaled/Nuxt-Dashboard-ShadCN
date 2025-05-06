// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    esbuild: {
      loader: "ts",
    },
  },
  modules: [
    "shadcn-nuxt",
    "@nuxt/icon",
    "nuxt-highcharts",
    "@nuxtjs/color-mode",
  ],
  colorMode: { classSuffix: "" },
  shadcn: {
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  ssr: true,
  nitro: {
    preset: "netlify",
  },
});
