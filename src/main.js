import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import './assets/styles/main.scss'
import vClickOutside from '@/directives/v-click-outside.js'

Vue.config.productionTip = false;
Vue.directive('click-outside', vClickOutside);


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


