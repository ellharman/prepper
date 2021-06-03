import Vue from 'vue';
import VueRouter from 'vue-router';
import Init from '../views/Init.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Init',
    component: Init,
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
  },
  {
    path: '/mainMobile',
    name: 'MainMobile',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainMobile.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
