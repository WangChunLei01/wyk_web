import Vue from 'vue'
import App from './App.vue'

import echarts from 'echarts'

import router from '@/router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'

Vue.prototype.$echarts = echarts // 全局引入echarts
Vue.prototype.$tinymce = tinymce // 将全局tinymce对象指向给Vue作用域下
Vue.use(VueTinymce)              // 安装vue的tinymce组件

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router, 

}).$mount('#app')
