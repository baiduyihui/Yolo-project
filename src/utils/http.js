import axios from 'axios'
export const http=axios.create({
    baseURL:'http://127.0.0.1:8080/api'
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