// https://nuxt.com/docs/api/configuration/nuxt-config
import vsharp from "vite-plugin-vsharp";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ["/landing"],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
  ],
  supabase: {
    redirect: false,
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss(), vsharp()],
  },
});
