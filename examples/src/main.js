/* (runtime-only or standalone) has been set in webpack.base.conf with an alias. */
import '../../static/assets/styles/salesforce-lightning-design-system.min.css'
import '../../static/assets/icons/font/iconfont.css'
import Vue from 'vue'
import App from './App'
import Vueforce from '../../src/index.js'

Vue.config.productionTip = false

Vue.use(Vueforce)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
