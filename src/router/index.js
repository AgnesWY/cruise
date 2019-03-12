import Vue from 'vue'
import Router from 'vue-router'
import agent from '@/components/agent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'agent',
      component: agent,
      meta: {
            title: '服务器状态管理'
        },
    },
    // {
    //     name: 'HelloWorld',
    //     path: '/',
    //     meta: {
    //         title: '首页'
    //     },
    //     component: require('@/components/HelloWorld')
    // },
  ],
  mode:'history'
})
