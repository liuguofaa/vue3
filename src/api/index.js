import http from '../utils/http'

export default{
    getListAPI(params){
       return http.post('getList.json', params)
   }
}