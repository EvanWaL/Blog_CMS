import loadable from 'react-loadable'
import Loading from '../components/Loading'

export const Home = loadable({
  loader: () => import('../containers/Home'),
  loading: Loading
})
export const Login = loadable({
  loader: () => import('../containers/Login'),
  loading: Loading
})
export const Counter = loadable({
  loader: () => import('../containers/Counter'),
  loading: Loading
})

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    requiresAuth: true
  },
  {
    path: '/login',
    component: Login,
    requiresAuth: false
  },
  {
    path: '/counter',
    component: Counter,
    requiresAuth: true
  }
]
export default routes
