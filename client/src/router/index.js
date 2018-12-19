import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import login from '@/components/login'
import apps from '@/components/apps'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
		{
      path: '/register',
      name: 'register',
      component: register
    },
		{
      path: '/login',
      name: 'login',
      component: login
    },
		{
      path: '/apps',
      name: 'apps',
      component: apps
    }
  ]
})
