export default {
  path: '/',
  name: 'home',
  meta: {
    title: 'Главная страница'
  },
  component: () => import('../HomePage.vue')
};