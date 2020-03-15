<template>
  <div>
    <div><img :src="imgSrc"/><span>{{movie.title}}</span></div>
    <div :style="{height:'1px', backgroundColor: '#ff4400'}"></div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movie: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      imgSrc: 'https://w1.hoopchina.com.cn/26/3c/5d/263c5d87f6f542cd3893b45a076fea3e001.jpg'
    }
  },
  mounted () {
    // console.log(this.movie.title)
  },
  methods: {
    testMethod () {
      console.log('MovieItem#testMethod')
    }
  }
}
</script>

<style scoped>

</style>
