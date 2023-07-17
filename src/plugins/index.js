/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "@/plugins/vuetify";
import router from "@/router/index";
// import axios from "./axios";
import VueCookies from "vue-cookies";
import store from "@/store/index";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(router).use(VueCookies).use(store);
}
