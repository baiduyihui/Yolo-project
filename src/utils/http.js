import axios from 'axios'
export const http=axios.create({
    baseURL:'http://ify543.natappfree.cc'
})
http.interceptors.request.use((config)=>{
    return config;

},
(error)=>{
    return Promise.reject(error);}
)
http.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    return Promise.reject(error);
})