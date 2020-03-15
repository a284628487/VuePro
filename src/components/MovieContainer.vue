<template>
  <div>
    <div>{{currentLang}}</div>
    <div @click="switchLang">{{$t('main.switchLang')}}</div>
    <h2>{{$t('home.movie')}} : {{movieObject.title}}</h2>
    <v-MovieItem :movie="movieObject"></v-MovieItem>
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
