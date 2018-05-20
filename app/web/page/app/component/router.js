import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list';

import { getCookie } from 'framework/utils/utils';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  routes: [
    {
      path: '/',
      component: ListView
    },
    {
      path: '/list',
      component: ListView
    },
    {
      path: '/detail/:id',
      component: () => import('./detail')
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    const token = getCookie('token');
    if (token) {
      next();
    }
  } else {
    next();
  }
});
export default router;
