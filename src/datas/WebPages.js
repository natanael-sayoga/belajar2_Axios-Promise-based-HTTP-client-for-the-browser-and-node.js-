let webPages = localStorage.getItem('webPages')
let webPagesArr = JSON.parse(webPages)

export default{
    getAllPages(){
        return webPagesArr
    },
    getSinglePage(index){
        return webPagesArr[index]
    }
}