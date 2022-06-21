import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import "normalize.css";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(Router).mount("#app");
