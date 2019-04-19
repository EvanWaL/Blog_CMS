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

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]
export default routes
