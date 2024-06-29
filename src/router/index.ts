import { createWebHashHistory, createRouter } from 'vue-router'
export const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path: '/',
      name:'首页',
      component: () => import('@/views/theHome.vue')
    }, 
    {
      path:'/dc',
      name:'柱状图绘制',
      component: () => import('@/views/DC/dcIndex.vue')
    },
    {
      path:'/yali',
      name:'YALI',
      component: () => import('@/views/YALI/yaliIndex.vue')
    },
    {
      path:'/yalis',
      name:'双压力计放水试验',
      component: () => import('@/views/YALI/yaliLayout.vue'),
      children:[
        {
          path:'/yalis/',
          name:'基础数据图标获取',
          component: () => import('@/views/YALI/yaliMiddleBody.vue')
        },
        {
          path:'/yalis/steadySign',
          name:'稳定流（单孔）',
          component: () => import('@/views/YALI/Next/steadySign.vue')
        },
        {
          path:'/yalis/steadyMany',
          name:'稳定流（多孔）',
          component: () => import('@/views/YALI/Next/steadyMany.vue')
        },
        {
          path:'/yalis/steadyYue',
          name:'稳定流（越流）',
          component: () => import('@/views/YALI/Next/steadyYue.vue')
        },
        {
          path:'/yalis/steadyNo',
          name:'非稳定流',
          component: () => import('@/views/YALI/Next/steadyNo.vue')
        }
      ]

    }
  ]
})
