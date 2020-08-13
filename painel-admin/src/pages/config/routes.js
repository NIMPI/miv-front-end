export default [
  {
    name: 'config',
    path: '/config',
    component: () => import(/* webpackChunkName: "series" */ './Config'),
    meta: {
      showNavbar: true,
      title: 'Configurações'
    }
  }
]
