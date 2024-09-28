import {createRouter,createWebHistory} from 'vue-router'
 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      redirect:'/login',
      meta: { requiresAuth: false }
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/LoginView'),
        meta: { requiresAuth: false }
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
            }],
        meta: { requiresAuth: true }
    },
  ]
})

// //路由守卫
// router.beforeEach((to, from, next) => {
//   const isLoggedIn = localStorage.getItem('session_id') !== null
//   if (to.meta.requiresAuth && !isLoggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// })

export default router