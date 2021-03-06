import Vue from 'vue'
import App from './App.vue';
import router from './router';
import store from './store';

import{
  BootstrapVue, IconsPlugin
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(store)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount('#app')
