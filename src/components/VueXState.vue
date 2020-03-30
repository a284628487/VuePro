<template>
  <div>
    <h4>mapState</h4>
    <div @click="increaseClickTimes">点击次数: {{clickTimes}}</div>
    <div>点击次数: {{clickTimesConvert}}</div>
    <div>点击次数 % 3 = {{computedExample}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
// https://vuex.vuejs.org/zh/guide/state.html
export default {
  name: 'VueXState',
  created () {
  },
  methods: {
    increaseClickTimes () {
      this.$store.commit('setClickTimes', parseInt(this.clickTimes) + 1)
    }
  },
  computed: {
    computedExample () {
      return this.clickTimes % 3
    },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      clickTimes: state => state.clickTimes,
      clickTimesConvert: state => state.clickTimes % 2 === 0 ? '偶数次' : '奇数次'
    })
  }
}
</script>

<style scoped>

</style>
