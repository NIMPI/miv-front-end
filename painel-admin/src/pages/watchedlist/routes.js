export default [
  {
    name: 'metadados',
    path: '/metadados',
    component: () => import('./Watchedlist'),
    meta: {
      showNavbar: true,
      title: 'Metadados'
    }
  }
]
