import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'// 引入初始化样式
import ElementUI from 'element-ui'// 引入包
import 'element-ui/lib/theme-chalk/index.css'// 引入elemenui样式
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值黑马头条默认地址
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)// 全局注册
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
