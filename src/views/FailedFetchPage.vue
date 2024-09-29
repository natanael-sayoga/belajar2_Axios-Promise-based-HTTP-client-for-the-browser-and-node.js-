<template>
    <h1>Check Console</h1>
    <div class="row">
        <div class="col"> <button class="btn btn-danger" v-on:click="hungPromise()">Hung Promise</button> </div>
        <div class="col"> <button class="btn btn-danger" v-on:click="timeoutPromise()">Time Out Promise</button> </div>
        <div class="col"> <button class="btn btn-danger" v-on:click="abortPromise()">Aborted Promise</button> </div>
    </div>
    
    <div v-bind:class="{'loading':data.isFetching}"> </div>
    <div v-if="data.isFetching">
        please wait...
    </div>

    <div v-if="data.errors.length>0">
        <li v-for="error of data.errors">
            {{error.message}}
        </li>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';

let data = reactive({
    isFetching: false,
    errors: []
})
const axiosInstance = axios.create({
    headers:{
        'my-custom-header':'coba-coba axios'
    }
})

async function hungPromise(){
    try{
        data.isFetching = true
        await new Promise(() => {}); // This promise will never resolve
        console.log("this message will never be printed in the console")
    }catch(error){
        console.log(error)
        data.errors = [error]
    }
}

async function timeoutPromise(){
    try{
        data.isFetching = true
        response = await axiosInstance.get("https://api.example.com/data", {
            timeout: 1000
        })
    }catch(error){
        console.log(error)
        data.errors = [error]
        data.isFetching = false
    }
}

function newAbortSignal(timeoutMs) {
    const abortController = new AbortController();
    //after x amount of time, trigger abort:
    setTimeout(() => abortController.abort(), timeoutMs || 0);
    return abortController.signal;
}

async function abortPromise(){
    try{
        data.isFetching = true
        response = await axiosInstance.get("https://api.example.com/data", {
            signal: newAbortSignal(100)
        })
    }catch(error){
        console.log(error)
        data.errors = [error]
        data.isFetching = false
    }
}

</script>



<style scoped>
.loading {
    width: 2rem;
    height: 2rem;
    border: 5px solid #f3f3f3;
    border-top: 6px solid mediumseagreen;
    border-radius: 100%;
    margin: auto;
    animation: spin 1s infinite linear;
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>