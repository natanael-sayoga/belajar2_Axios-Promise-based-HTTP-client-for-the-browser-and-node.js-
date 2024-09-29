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

function addPagesArrays(pages){
    if(localStorage.getItem('webPages')!==null){
        let pagesJsonStr = localStorage.getItem('webPages')
        let pagesArr = JSON.parse(pagesJsonStr)

        pagesArr.push(pages)
        localStorage.setItem('webPages', JSON.stringify(pagesArr))
    }
}

// addPagesArrays({
//     pageTitle: 'VeeValidate Form',
//     pageUrl: '/VeeValidateForm'
// })

const myApp = createApp(MyApp)
myApp.use(router)
myApp.provide('$webPages', $webPages)
myApp.mount('#myApp')
