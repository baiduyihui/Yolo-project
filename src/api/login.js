import {http} from '@/utils/http'
export const getLoginAPI=(username,password)=>{
    return http.post('/api/yolohezi/login/',{
        username,
        password
    })
}