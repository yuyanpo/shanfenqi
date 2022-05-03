import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home/index.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/about/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
