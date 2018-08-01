import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createProvider } from './vue-apollo'
import Vuelidate from 'vuelidate'
import VueTruncate from 'vue-truncate-filter'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueTruncate)

new Vue({
  router,
  store,
  provide: createProvider().provide(),
  render: h => h(App)
}).$mount('#app')
