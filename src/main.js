import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import { createPinia } from "pinia";

import "normalize.css";
import "flag-icons/css/flag-icons.min.css";

createApp(App).use(createPinia()).use(Router).mount("#app");
