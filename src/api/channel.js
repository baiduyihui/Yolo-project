import {http} from '@/utils/http'

export const getChannelListAPI=()=>{
    return http.get('/channel_info')
}

export const setChannelListAPI=(data)=>{
    return http.patch('/channel_info/',data)
}

export const reopenChannelListAPI=(data)=>{
    return http.patch('/reopen/',data)
}