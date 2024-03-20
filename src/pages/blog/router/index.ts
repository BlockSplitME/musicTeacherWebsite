export default {
  path: '/blog',
  name: 'blog',
  meta: {
    title: 'Разделы блога'
  },
  component: () => import('../BlogPage.vue'),
  // children: [
  //   {
  //     path: '',
  //     name: 'section',
  //     component: () => import('@/pages/section/SectionPage.vue'),
  //   },
  //   {
  //     path: 'posts',
  //     name: 'post',
  //     component: () => import('@/pages/post/PostPage.vue'),
  //   }
  // ]
};
