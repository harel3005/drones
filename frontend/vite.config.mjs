// Plugins
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Fonts from "unplugin-fonts/vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";
import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      VueRouter(),
      Vue({
        template: { transformAssetUrls },
      }),
      Components({
        resolvers: [VuetifyResolver()],
        dts: true,
      }),
      Fonts({
        google: {
          families: [
            {
              name: "Fredoka",
              styles: "wght@100;300;400;500;700;900",
            },
          ],
        },
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: true,
        },
        vueTemplate: true,
      }),
      Vuetify({
        autoImport: true,
        styles: {
          configFile: "src/styles/settings.scss",
        },
      }),
    ],
    define: { "process.env": {} },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },
    server: {
      port: env.VITE_PORT,
    },
  };
});
