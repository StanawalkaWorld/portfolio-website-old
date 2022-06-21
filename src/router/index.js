import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
    {
        path: "/",
        component: IndexView,
    },
    {
        path: "/about",
        component: AboutView,
    },
    {
        path: "/contact",
        component: ContactView,
    },
];

export default createRouter({
    routes,
    history: createWebHashHistory(),
});
