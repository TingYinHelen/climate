import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
  },
  {
    path: '/opportunity',
    name: 'Opportunity',
    component: () => import(/* webpackChunkName: "opportunity" */ '../views/Opportunity.vue'),
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import(/* webpackChunkName: "community" */ '../views/Community.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
