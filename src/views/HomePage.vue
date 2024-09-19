<template>
    <h6> {{ date }} </h6>
    <h1> HTTP Protocols </h1>
    <section>
        <b>Internet Protocol</b> based on the cycle of <b>REQUEST and RESPONSE</b> between client and server.
        <ul>
            <li>
                It is a <b>stateless protocol</b>, means that every HTTP request the server receives is independent 
                and does not relate to requests that came prior to it. The protocol ends once the client's REQUEST
                has been RESPONDED by the server 
            </li>
            <li>
                The server RESPONSE can either be file(s) requested by the client or a code indicating some sort 
                of error / messages. <b>HTTP CODES ARE LISTED BELLOW:</b>
                <ol>
                    <li><span class="badge rounded-pill bg-secondary">1xx</span> -> Informational</li>
                    <li><span class="badge rounded-pill bg-secondary">2xx</span> -> Success, requested file found!, example: <span class="badge bg-success">code 200</span></li>
                    <li><span class="badge rounded-pill bg-secondary">3xx</span> -> Redirection</li>
                    <li><span class="badge rounded-pill bg-secondary">4xx</span> -> Client Error, requested file not found!, example: <span class="badge bg-warning text-dark">code 404</span></li>
                    <li><span class="badge rounded-pill bg-secondary">5xx</span> -> Server Error, the request can't be process right now</li>
                </ol>
            </li>
            <li>
                HTTP Request and Response <b>consisted of 3 parts:</b>
                <ol>
                    <li>
                        <b>Start Line</b> -> the very first part being read, 
                        indicating what kind or request is this or what kind of code
                        the server responded with
                    </li>
                    <li><b>Header</b> -> containing metadata from the Request / Response</li>
                    <li><b>Body</b> -> containing the actual content being requested or content that need to be processed</li>
                </ol>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { computed } from 'vue';

const date = computed(
    () => {
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        
        let myDate = new Date()
        let year = myDate.getFullYear()
        let month = myDate.getMonth()
        let date = myDate.getDate()
        let day = myDate.getDay()
        return `${weekday[day]}, ${date} ${months[month]} ${year}`
    }
)
</script>