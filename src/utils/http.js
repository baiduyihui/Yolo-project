import axios from 'axios'
export const http=axios.create({
    baseURL:'http://ipbdtest0001.natapp1.cc'
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