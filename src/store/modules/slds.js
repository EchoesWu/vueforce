import * as types from '../mutation-types'

// initial state
const state = {
  assets: './static'
}

// getters
const getters = {
  assets: state => state.assets
}

// actions
const actions = {
  replace ({ commit }, url) {
    commit(types.SLDS_REPLACE_ASSETS, url)
  }
}

// mutations
const mutations = {
  [types.SLDS_REPLACE_ASSETS] (state, url) {
    state.assets = url
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
