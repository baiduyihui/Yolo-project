import {createRouter,createWebHistory} from 'vue-router'
 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/LoginView'),
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('../views/HomeView'),
        children:[{
              path:'realtime',
              name:'realtime',
              component:() => import('../views/RealTime.vue')
            },
            {
              path:'search',
              name:'search',
              component:() => import('../views/SearchAlarm.vue')
            },
            {
              path: 'channel',
              name: 'channel',
              component: () => import('../views/ChannelView.vue')
            }]
    },
  ]
})
 
export default router