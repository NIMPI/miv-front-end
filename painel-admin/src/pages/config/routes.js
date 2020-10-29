export default [
  {
    name: 'Config',
    path: '/config',
    component: () => import('./Config'),
    meta: {
      showNavbar: true,
      title: 'Configurações'
    }
  }
]
