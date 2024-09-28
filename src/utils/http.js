import axios from 'axios'
export const http=axios.create({
<<<<<<< HEAD
// <<<<<<< Updated upstream
    // baseURL:'http://ify543.natappfree.cc'
// =======
    baseURL:'http://ipbdtest0001.natapp1.cc/api'
// >>>>>>> Stashed changes
=======
    baseURL:'http://ipbdtest0001.natapp1.cc'
>>>>>>> 70ed5110e01baf7f70d0ea7fa26ba1f7cb56c41c
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