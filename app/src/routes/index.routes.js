import Home from '../containers/Home'
import Login from '../containers/Login'

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
