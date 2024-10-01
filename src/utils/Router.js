import HomePage from "@/views/HomePage.vue";
import AxiosPage from "@/views/AxiosPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import VeeFormPage from "@/views/forms/VeeFormPage.vue";
import CounterPage from "@/views/counter/CounterPage.vue";
import FailedFetchPage from "@/views/FailedFetchPage.vue";
import ClassicForm from "@/views/forms/ClassicForm.vue";
import CustomForm from "@/views/forms/CustomForm.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component:HomePage},
        {path: "/home", component:HomePage},
        {path: "/axios", component:AxiosPage},
        {path: "/counter", component:CounterPage},
        {path: '/failedFetch', component:FailedFetchPage},
        {
            path: "/VeeValidateForm", 
            component:VeeFormPage,
            children: [
                {path: 'classic', component:ClassicForm},
                {path: 'custom', component:CustomForm}
            ]
        }
    ]
})

export default router