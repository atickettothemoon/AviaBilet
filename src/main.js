import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import scss from './assets/scss_style/main_style.scss';


new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
