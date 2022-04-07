export default {
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
  fastRefresh: {},

  routes: [
    { exact: true, path: '/', component: 'index' },
    { exact: true, path: '../src/pages/main', component: 'main' },
  ],
};
