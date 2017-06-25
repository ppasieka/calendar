import Vue from 'vue'
import VueScroll from 'vue-scroll'
import App from './App.vue'

Vue.use(VueScroll)

new Vue({
  el: '#app',
  render: h => h(App)
})
