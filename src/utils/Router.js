import HomePage from "@/views/HomePage.vue";
import AxiosPage from "@/views/AxiosPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component:HomePage},
        {path: "/home", component:HomePage},
        {path: "/axios", component:AxiosPage}
    ]
})

export default router