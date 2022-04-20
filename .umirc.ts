import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { exact: true, path: '/homepage', component: '@/pages/homepage' },
    { exact: true, path: '/the-theatre', component: '@/pages/theatre' },
    { exact: true, path: '/past-release', component: '@/pages/past-release' },
    { exact: true, path: '/box-office', component: '@/pages/box-office' },
    { exact: true, path: '/collect', component: '@/pages/collect' },
    { exact: true, path: '/community', component: '@/pages/community' },
  ],
  fastRefresh: {},
});
