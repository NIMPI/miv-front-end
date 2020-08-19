export default [
  {
    name: 'Config',
    path: '/config',
    component: () => import(/* webpackChunkName: "series" */ './Config'),
    meta: {
      showNavbar: true,
      title: 'Configurações'
    }
  }
]
