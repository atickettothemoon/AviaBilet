import Vue from 'vue'
import Vuex from 'vuex'
import aviaflight from './modules/aviaflight' //импорт модуля
import json from './LEDMOW.json'



Vue.use(Vuex)

export default new Vuex.Store({
/*  //обхекты
  actions:{},
  //функции, который будут изменять store
  mutations:{},
  //изначальные данные, данные которые есть в приложении
  state:{},
  //трансоформировать и получать данные из store
  getters:{},*/
  
  //декомпозировать логику
  modules:{
    aviaflight
  }
})

