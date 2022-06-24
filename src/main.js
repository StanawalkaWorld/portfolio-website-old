import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import "normalize.css";
import "flag-icons/css/flag-icons.min.css";

createApp(App).use(createPinia()).mount("#app");
