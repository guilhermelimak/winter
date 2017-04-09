import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import VueShortkey from 'vue-shortkey'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.use(VueShortkey)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes,
})

/* eslint-disable no-new */
new Vue({ router, ...App }).$mount('#app')
