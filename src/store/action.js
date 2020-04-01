export default {
  setClickTimes ({commit}, value) {
    commit('setClickTimes', value)
  },
  setUserName ({commit}, value) {
    console.log('setUserName', 'action')
    commit('setUserName', value)
  },
  setUserAge ({commit}, value) {
    console.log('setUserAge', 'action')
    commit('setUserAge', value)
  }
}
