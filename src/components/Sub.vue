<template>
  <div>
    <div>{{currentLang}}</div>
    <div @click="switchLang">{{$t('main.switchLang')}}</div>
    <h4>{{$t('home.movie')}} : {{movieName}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'Sub',
    data() {
      return {
        movieName: 'Waiting...'
      }
    },
    methods: {
      switchLang() {
        let oriLocale = this.$i18n.locale
        if (oriLocale === 'zh') {
          this.$i18n.locale = 'en'
        } else {
          this.$i18n.locale = 'zh'
        }
      }
    },
    mounted() {
      var movie = this.$route.query['movie']
      this.movieName = movie.title
    },
    created() {
      console.log('Sub#created')
    },
    destroyed() {
      console.log('Sub#destroyed')
    },
    computed: {
      currentLang() {
        return this.$t('main.currentLang')
      }
    }
  }
</script>

<style scoped>

</style>
