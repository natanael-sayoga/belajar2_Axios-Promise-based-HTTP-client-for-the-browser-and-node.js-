import HomePage from "@/views/HomePage.vue";
import AxiosPage from "@/views/AxiosPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import CounterPage from "@/views/counter/CounterPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component:HomePage},
        {path: "/home", component:HomePage},
        {path: "/axios", component:AxiosPage},
        {path: "/counter", component:CounterPage}
    ]
})

export default router