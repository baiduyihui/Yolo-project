import { defineStore } from "pinia";

const usestore = defineStore('router',{
   state: () => ({
        router:localStorage.getItem('key') || 'realtime',
    })
})

export default usestore