<template>
  <div>
    <div>Movie: {{movieName}}</div>
  </div>
</template>

<script>
  import Store from '../assets/Store'

  export default {
    name: 'DetailSub',
    routePath: '/detailSub/',
    data() {
      return {
        movieName: 'Waiting...'
      }
    },
    mounted() {
      var path = this.$route.path
      var index = path.substring(11, path.length)
      var movie = Store.state.movies[index]
      this.movieName = movie.title
    },
    created() {
      console.log('DetailSub#created')
    },
    destroyed() {
      console.log('DetailSub#destroyed')
    }
  }
</script>

<style scoped>

</style>
