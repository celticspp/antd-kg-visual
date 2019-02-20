export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
      }
    }],
  ],
  // proxy: {
  //   '/dev': {
  //     target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
  //     changeOrigin: true
  //   },
  // },
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: 'echarts/network'
      },
      {
        path: '/helloworld',
        component: './HelloWorld',
      },
      {
        path: '/puzzlecards',
        component: './puzzlecards',
      },
      {
        path: '/puzzlecards2',
        component: './puzzlecards2',
      },
      {
        path: 'list',
        component: '../page/list'
      },
      {
        path: '/echarts',
        routes: [
          { path: '/echarts/network', component: 'echarts/network' },
          { path: '/echarts/test', component: 'echarts/test' },
        ]
      },
      {
        path: '/g6',
        routes: [
          { path: '/g6/editor', component: 'g6/editor' },
        ]
      },
      {
        path: '/bizcharts',
        routes: [
          { path: '/bizcharts/test', component: 'bizcharts/test' }
        ]
      }
    ]
  }],
};
