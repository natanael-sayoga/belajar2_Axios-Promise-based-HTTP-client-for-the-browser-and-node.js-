import $axiosRNGapi from "@/utils/RNGAPI-Connection";
class http_rngAPI{
    getRandomNumber() {
        return $axiosRNGapi.get('?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new')
    }
}

export default new http_rngAPI()