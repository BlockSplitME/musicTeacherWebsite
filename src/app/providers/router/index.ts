import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [] as unknown as RouteRecordRaw[]
});

export function getRouteByName(name: string) {
  return router.getRoutes().find( route => route.name == name );
}

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); 
  next();
});

export default router;
