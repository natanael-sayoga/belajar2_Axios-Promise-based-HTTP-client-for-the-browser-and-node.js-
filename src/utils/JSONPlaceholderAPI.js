import axios from "axios";

const $axiosInstanceJS = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000
})

export default $axiosInstanceJS