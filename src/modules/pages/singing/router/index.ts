export default {
  path: '/singing',
  name: 'singing',
  meta: {
    title: 'Пение'
  },
  component: () => import('../Singing.vue'),
  children: [
    // { 
    //   path: "",
    //   name: 'singingHome', 
    //   component: () => import('../components/PerceptionHome.vue') 
    // }, 
    {
      path: "post",
      name:  'singingPost',
      component: () => import('@/shared/widgets/post/Post.vue') 
    }
  ]
};
