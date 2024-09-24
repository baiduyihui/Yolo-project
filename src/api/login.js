import {http} from '@/utils/http'
export const getLoginAPI=(username,password)=>{
    return http.post('/yolohezi/login',{
        username,
        password
    })
}