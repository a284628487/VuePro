export default {
  setClickTimes (state, value) {
    state.clickTimes = value
  },
  setUserName (state, update) {
    console.log('setUserName', 'mutations')
    state.user = {...state.user, name: update.name}
  },
  setUserAge (state, update) {
    console.log('setUserAge', 'mutations')
    state.user = {...state.user, age: update.age}
  }
}
