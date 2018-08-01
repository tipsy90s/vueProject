//引入vue
import Vue from 'vue';

//引入App.vue
import App from './App.vue';
import axios from 'axios';

//挂载到vue原型树上
Vue.prototype.$axios = axios;

// axios.defaults.baseURL = "https://sp0.baidu.com";

Vue.prototype.HOST = '/api'; //将conif中index.js里面的api映射拿过来

//new vue
new Vue(
  {
  //目的地
  el: '#app',
  //渲染内容
  render: c=>c(App)
}
)

