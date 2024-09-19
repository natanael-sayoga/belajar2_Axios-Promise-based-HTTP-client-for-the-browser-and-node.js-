import HomePage from "@/views/HomePage.vue";
import AxioPage from "@/views/AxioPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component:HomePage},
        {path: "/home", component:HomePage},
        {path: "/axio", component:AxioPage}
    ]
})

export default router