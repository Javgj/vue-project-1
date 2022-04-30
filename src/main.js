import Vue from 'vue'
import App from './App.vue'

// import '@/assets/scss/app.scss'

// router
import router from '@/router'

// boostrap vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// i18n
import { i18n } from '@/plugins/i18n'

// axios
import { http } from '@/plugins/axios'

// libs
import { request } from '@/libs/request'

// store
import store from '@/store'

// global components
import '@/global-components'

Vue.use(BootstrapVue)

Vue.prototype.$http = http
Vue.prototype.$request = request
Vue.prototype.$store = store

Vue.config.productionTip = false

export default new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
