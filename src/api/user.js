import {http} from '@/utils/http'
export const getLooutAPI=()=>{
    return http.post('/yolohezi/logout/')
}