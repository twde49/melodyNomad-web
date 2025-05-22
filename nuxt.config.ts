import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  components: [
    {
      path: "~/components",
    },
  ],

  app: {
     pageTransition: { 
       name: 'page', 
       mode: 'out-in' 
     }
   },
   image: {
     quality: 80,
   },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@pinia/nuxt",
  ],
  css: ["~/assets/css/main.css"],
});