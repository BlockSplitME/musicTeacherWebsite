import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [] as unknown as RouteRecordRaw[]
});

export function getRouteByName(name: string) {
  return router.getRoutes().find( route => route.name == name );
}
export default router;
