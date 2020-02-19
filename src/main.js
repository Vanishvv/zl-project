// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import './js/log'
import '@smallwei/avue/lib/index.css';
import waterfall from 'vue-waterfall2'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Viewer);
Vue.use(waterfall)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
