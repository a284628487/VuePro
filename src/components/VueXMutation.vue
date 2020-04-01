<template>
  <div>
    <div @click='setUserName({name:"Richer.Cai"})'>更新我的Name</div>
    <div @click='setAge({age:30})'>更新我的Age</div>
    <div>我的信息：{{userInfo.name}} {{userInfo.age}}</div>
  </div>
</template>

<script>
// https://vuex.vuejs.org/zh/guide/mutations.html
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'VueXMutation',
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    // 将 `this.setUserName()` 映射为 `this.$store.commit('setUserName')`
    ...mapMutations([
      'setUserName'
    ]),
    // 将 `this.setAge()` 映射为 `this.$store.commit('setUserAge')`
    ...mapMutations({
      setAge: 'setUserAge'
    })
  }
}
</script>

<style scoped>

</style>
