// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css"],
  app: {
    head: {
      title: "Dashboard | Novanest",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/media/icons/web-icon.png",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&display=swap",
        },
      ],
      meta: [
        { name: "description", content: "Interactive E-commerce dashboard" },
        { name: "keywords", content: "e-commerce, dashboard, admin, shop" },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    esbuild: {
      loader: "ts",
    },
  },
  modules: ["shadcn-nuxt", "@nuxt/icon", "@nuxtjs/color-mode"],
  colorMode: { classSuffix: "" },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  ssr: false,
});
