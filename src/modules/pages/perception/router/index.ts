export default {
  path: '/perception',
  name: 'perception',
  meta: {
    title: 'Восприятие'
  },
  component: () => import('../Perception.vue'),
  children: [
    { 
      path: "",
      name: 'perceptionHome', 
      component: () => import('../components/PerceptionHome.vue') 
    }, 
    {
      path: "post",
      name:  'perceptionPost',
      component: () => import('@/shared/widgets/post/Post.vue') 
    }
  ]
};