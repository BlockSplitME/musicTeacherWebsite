import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [] as unknown as RouteRecordRaw[]
});

export default router;
