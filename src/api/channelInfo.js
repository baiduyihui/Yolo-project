import {http} from '@/utils/http'
export const getChannelInfoAPI=(channel_status,address,channel_name,person_status,
    person_sensitive,
    person_frequency,
    car_status,
    car_sensitive,
    car_frequency,
    week,
    change_time
    
)=>{
    return http.get('/channel_info/',{
        params:{
            channel_status,
            address,
            channel_name,
            person_status,
            person_sensitive,
            person_frequency,
            car_status,
            car_sensitive,
            car_frequency,
            week,
            change_time
        }
    })
}