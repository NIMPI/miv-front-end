export default [
  {
    name: 'Arquivos',
    path: '/arquivos',
    component: () => import(/* webpackChunkName: "Arquivos" */ './Arquivos'),
    meta: {
      showNavbar: true,
      title: 'Arquivos'
    }
  }
]
