import Home from '@/containers/Home'
import Login from '@/containers/Login'

export default [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '*',
    redirect: '/',
  },
]
