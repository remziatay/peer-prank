import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FAQ from '../views/FAQ.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create',
    name: 'Create',
    component: () =>
      import(/* webpackChunkName: "create" */ '../views/Create.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/p/:rest(.*)*/:id',
    name: 'Prank',
    component: () =>
      import(/* webpackChunkName: "prank" */ '../views/Prank.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
