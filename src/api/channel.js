import {http} from '@/utils/http'

export const getChannelListAPI=()=>{
    return http.get('/api/channel_info')
}

export const setChannelListAPI=(data)=>{
    return http.patch('/api/channel_info/',data)
}

export const reopenChannelListAPI=(data)=>{
    return http.patch('/api/reopen/',data)
}