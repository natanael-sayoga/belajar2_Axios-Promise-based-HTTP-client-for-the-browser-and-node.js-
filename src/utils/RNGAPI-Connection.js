import axios from "axios";

const $axiosRNGapi = axios.create({
    baseURL: 'https://www.random.org/integers/',
    timeout: 3000
})

export default $axiosRNGapi