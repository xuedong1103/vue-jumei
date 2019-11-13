import Vue from 'vue'
import App from './App.vue'
import router from "./router"
//import "@common/components"
import observer from "./observer"
import store from "@store"
Vue.prototype.$observer = observer;
import VueTouch from "vue-touch";
Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
