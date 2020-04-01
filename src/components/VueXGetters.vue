<template>
  <div>
    <h4>mapGetters</h4>
    <div @click="increaseClickTimes">点击次数: {{clickTimes}}</div>
    <div>点击次数: {{clickTimesCovert}}</div>
    <div>点击次数 % 3 = {{computedExample}}</div>
    <div>$store.getters.clickTimes = {{this.$store.getters.clickTimes}}</div>
    <div>taskName = {{taskName}}</div>
    <div>todoCount = {{todo}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
// https://vuex.vuejs.org/zh/guide/getters.html
export default {
  name: 'VueXGetters',
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
    taskName () {
      return this.$store.getters.tasks(1 + this.clickTimes % 3)[0].name
    },
    clickTimesCovert () {
      return this.$store.state.clickTimes % 2 === 0 ? '偶数次' : '奇数次'
    },
    // 把 `this.todo` 映射为 `this.$store.getters.todoCount`
    ...mapGetters({
      todo: 'todoCount'
    }),
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'clickTimes'
    ])
  }
}

</script>

<style scoped>

</style>
