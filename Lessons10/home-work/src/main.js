import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {BootstrapVue} from "bootstrap-vue";
import router from "./router/router";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
