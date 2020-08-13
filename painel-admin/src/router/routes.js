import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as config } from '../pages/config'
import { routes as watchlist } from '../pages/watchlist'
import { routes as metadados } from '../pages/metadados'

export default [
  ...auth,
  ...home,
  ...watchlist,
  ...metadados,
  ...config
]
