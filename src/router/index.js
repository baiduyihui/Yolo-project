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
              component:() => import('../views/RealTime.vue'),
              // meta: { requiresAuth: true } // 需要登录
            },
            {
              path:'search',
              name:'search',
              component:() => import('../views/SearchAlarm.vue'),
              // meta: { requiresAuth: true } // 需要登录
            },
            {
              path: 'channel',
              name: 'channel',
<<<<<<< HEAD
              component: () => import('../views/ChannelView.vue'),
              // meta: { requiresAuth: true } // 需要登录
            }]
    },
  ]
})
//  添加全局前置守卫
router.beforeEach((to, from, next) => {
  // 检查是否已经登录
  const isLoggedIn = localStorage.getItem('session_id');

  // 检查即将去往的路由是否需要登录
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isLoggedIn) {
    // 如果需要登录但用户未登录，则重定向到登录页面
    next('/login');
  } else {
    // 否则，正常浏览
    next();
  }
})
=======
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

>>>>>>> 70ed5110e01baf7f70d0ea7fa26ba1f7cb56c41c
export default router