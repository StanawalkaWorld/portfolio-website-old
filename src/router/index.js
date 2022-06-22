import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";

const routes = [
    {
        path: "/",
        component: IndexView,
    },
];

export default createRouter({
    routes,
    history: createWebHashHistory(),
});
