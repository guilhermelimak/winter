import Home from '~/containers/Home'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '*',
    redirect: '/',
  },
]
