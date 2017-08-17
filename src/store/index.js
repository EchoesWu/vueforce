import Vuex from 'vuex'
import loading from './modules/loading'
import slds from './modules/slds'

export default new Vuex.Store({
  modules: {
    loading,
    slds
  }
})
