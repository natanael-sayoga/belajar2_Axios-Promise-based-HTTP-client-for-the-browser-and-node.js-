import HomePage from "@/views/HomePage.vue";
import AxiosPage from "@/views/AxiosPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import VeeFormPage from "@/views/VeeFormPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component:HomePage},
        {path: "/home", component:HomePage},
        {path: "/axios", component:AxiosPage},
        {path: "/VeeValidateForm", component:VeeFormPage}
    ]
})

export default router