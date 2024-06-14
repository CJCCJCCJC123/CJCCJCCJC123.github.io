import { createWebHashHistory, createRouter } from 'vue-router'
export const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path: '/',
      name:'Home',
      component: () => import('@/views/theHome.vue')
    }, 
    {
      path:'/dc',
      name:'DC',
      component: () => import('@/views/DC/dcIndex.vue')
    },
    {
      path:'/yali',
      name:'YALI',
      component: () => import('@/views/YALI/yaliIndex.vue')
    }
  ]
})
