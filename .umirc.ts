import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/index', component: '@/pages/index' },
    {
      exact: true,
      path: '/',
      component: '@/layouts/index',
      routes: [{ path: '/homepage', component: '@/pages/homepage' }],
    },
  ],
  fastRefresh: {},
});
