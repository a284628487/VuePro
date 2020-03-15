<template>
  <div>
    <div>{{currentLang}}</div>
    <div @click="switchLang">{{$t('main.switchLang')}}</div>
    <h2>{{$t('home.movie')}} : {{movieObject.title}}</h2>
    <v-MovieItem :movie="movieObject" ref="movieItem"></v-MovieItem>
    <div ref="refDiv">Nothing</div>
    <input type="text" ref="refInput"/>
  </div>
</template>

<script>
import MovieItem from './MovieItem'

export default {
  name: 'MovieContainer',
  data () {
    return {
      movieObject: {}
    }
  },
  methods: {
    switchLang () {
      let oriLocale = this.$i18n.locale
      if (oriLocale === 'zh') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'zh'
      }
    }
  },
  mounted () {
    let movie = this.$route.query['movie']
    this.movieObject = movie
    console.log(this.$refs['movieItem'])
    // 调用子组件方法
    this.$refs['movieItem'].testMethod()
    // 修改传递给子组件的props
    setTimeout(() => {
      this.movieObject.title = '极品女士'
    }, 1000)
    // 获取当前组件中的ref
    let text = this.$refs['refDiv'].textContent
    console.log('refDiv.text = ' + text)
    //
    setTimeout(() => {
      this.$refs['refInput'].focus()
    }, 1000)
  },
  created () {
    console.log('MovieContainer#created')
  },
  destroyed () {
    console.log('MovieContainer#destroyed')
  },
  computed: {
    currentLang () {
      return this.$t('main.currentLang')
    }
  },
  components: {
    'v-MovieItem': MovieItem
  }
}
</script>

<style scoped>

</style>
