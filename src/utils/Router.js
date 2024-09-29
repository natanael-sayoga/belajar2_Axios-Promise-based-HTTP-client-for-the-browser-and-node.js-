import HomePage from "@/views/HomePage.vue";
import AxiosPage from "@/views/AxiosPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import VeeFormPage from "@/views/VeeFormPage.vue";
import CounterPage from "@/views/counter/CounterPage.vue";
import FailedFetchPage from "@/views/FailedFetchPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component:HomePage},
        {path: "/home", component:HomePage},
        {path: "/axios", component:AxiosPage},
        {path: "/VeeValidateForm", component:VeeFormPage},
        {path: "/counter", component:CounterPage},
        {path: '/failedFetch', component:FailedFetchPage}
    ]
})

export default router