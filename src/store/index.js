import { Store } from "vuex";
import http_rngAPI from "@/service/HTTP-RNGapi";
//import counterModule from "./counterModule/counterModule";

const counterModule = {
    state: {
        counter: 0,
        errors:[]
    },
    mutations: {
        setCounter(state, payload){
            state.counter = payload
        },
        increaseCounter(state){
            state.counter++
        },
        decreaseCounter(state){
            state.counter--
        },
        setErrors(state, payload){
            state.errors.push(payload)
        }
    },
    getters:{
        getSquaredNumber(state){
            return state.counter ** 2
        },
        getCounter(state){
            return state.counter
        }
    },
    actions:{
        fetchRandomNumber(context){
            http_rngAPI
            .getRandomNumber()
            .then(
                response => {
                    console.log(response)
                    context.commit('setCounter', response.data)
                }
            )
            .catch(
                error => {
                    console.log(error)
                    context.commit('setError', error)
                }
            )
        }
    }
}

const $store = new Store({
    modules: {
        'counterModule':counterModule
    }
})

export default $store