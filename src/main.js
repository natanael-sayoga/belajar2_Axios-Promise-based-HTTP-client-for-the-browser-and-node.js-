import { createApp } from 'vue'
import MyApp from './MyApp.vue'
import router from './utils/Router'
import $webPages from './datas/WebPages'

if(localStorage.getItem('webPages')===null){
    localStorage.setItem('webPages', `[
        {
            "pageTitle":"About HTTP",
            "pageUrl":"/home"
        },
        {
            "pageTitle":"About Axios",
            "pageUrl":"/axios"
        }
    ]`)
}

const myApp = createApp(MyApp)
myApp.use(router)
myApp.provide('$webPages', $webPages)
myApp.mount('#myApp')
