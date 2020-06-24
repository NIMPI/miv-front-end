export default [
  {
    name: 'config',
    path: '/config',
    component: () => import(/* webpackChunkName: "series" */ './Series'),
    meta: {
      showNavbar: true,
      title: 'Configurações'
    }
  }
]
