const routes = [
  {
    path: '/',
    url: './index.html',
  },
  // ログイン画面
  {
    path: '/login',
    name: 'Login',
    componentUrl: './pages/login.html'
  },
  // 一覧画面
  {
    path: '/list',
    name: 'List',
    componentUrl: './pages/list.html'
  },
  // ユーザ表示画面
  {
    path: '/show/:id',
    name: 'Show',
    componentUrl: './pages/show.html'
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
