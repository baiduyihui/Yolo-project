import axios from 'axios'
export const http=axios.create({
// <<<<<<< Updated upstream
    // baseURL:'http://ify543.natappfree.cc'
// =======
    baseURL:'http://101.132.177.19:9200/api'
// >>>>>>> Stashed changes
})
http.interceptors.request.use((config)=>{
    if (localStorage.getItem('session_id')) {
      config.headers["Authorization"] =localStorage.getItem('session_id')
    }
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