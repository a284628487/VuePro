<template>
  <div>
    <div>Movie: {{movieName}}</div>
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
    mounted() {
      var article = this.$route.query['article']
      this.movieName = article.title
    }
  }
</script>

<style scoped>

</style>
