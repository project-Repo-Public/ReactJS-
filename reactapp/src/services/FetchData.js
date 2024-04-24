
const springApi = "http;//localhost:8081/getall"
class FetchData{
   
     getUser(){
        return fetch(springApi).then(res => res.json());
    }
}
export default new FetchData();