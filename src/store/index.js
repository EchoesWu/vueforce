import Vue from 'vue'
import Vuex from 'vuex'
import loading from './modules/loading'
import slds from './modules/slds'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    slds
  }
})
