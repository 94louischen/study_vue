import Vue from 'vue'
// 导入elementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
// 导入vue router对象
import router from './router/index'

Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,   //把路由加入到vue实例中
  render: h => h(App),
}).$mount('#app')
