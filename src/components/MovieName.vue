<template>
  <div>
    <div>Movie: {{movieName}}</div>
  </div>
</template>

<script>
import Store from '../assets/Store'

export default {
  name: 'MovieName',
  routePath: '/movieName/',
  data () {
    return {
      movieName: 'Waiting...'
    }
  },
  mounted () {
    var path = this.$route.path
    console.log(path)
    var index = path.substring(11, path.length)
    var movie = Store.state.movies[index]
    this.movieName = movie.title
  },
  created () {
    console.log('MovieName#created')
  },
  destroyed () {
    console.log('MovieName#destroyed')
  }
}
</script>

<style scoped>

</style>
