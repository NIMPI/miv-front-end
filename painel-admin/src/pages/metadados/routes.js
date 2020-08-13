export default [
  {
    name: 'metadados',
    path: '/metadados',
    component: () => import('./Metadados'),
    meta: {
      showNavbar: true,
      title: 'Metadados'
    }
  }
]
