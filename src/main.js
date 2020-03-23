import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';


Vue.prototype.$axios = axios
Vue.use(MintUI)
// 请求拦截
axios.interceptors.request.use(config => {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config
}, error => {
    
  return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(response => {
  Indicator.close();
  return response
}, error => {
  Indicator.close();
  return Promise.reject(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
