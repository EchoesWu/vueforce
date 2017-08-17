import * as types from '../mutation-types'

// initial state
const state = {
  loading: false
}

// getters
const getters = {
  loading: state => state.loading
}

// actions
const actions = {
  on ({ commit }) {
    commit(types.LOADING_SWITCH_ON, true)
  },
  off ({commit}) {
    commit(types.LOADING_SWITCH_OFF, false)
  }
}

// mutations
const mutations = {
  [types.LOADING_SWITCH_ON] (state) {
    state.loading = true
  },
  [types.LOADING_SWITCH_OFF] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
