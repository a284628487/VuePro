<template>
  <div id="movie">
    <h4 style="color: #20A0FF">豆瓣电影排行榜</h4>
    <div class="box-card">
      <div v-for="(movie, index) in movies" class="text item">
        <router-link v-if="index%2 === 0" :to="{path:'/sub', query:{movie: movie}}">
          {{movie.title}}
        </router-link>
        <router-link v-if="index%2 === 1" :to="{path:'/detailSub/' + index}">
          {{movie.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Store from '../assets/Store'

  export default {
    name: 'Movie',
    data() {
      return {
        author: "Sky",
        movies: [],
      }
    },
    mounted() {
      var movies = Store.state.movies
      // 缓存数据为空
      if (movies.length === 0) {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {},
          emulateJSON: true
        }).then(function (response) {
          this.movies = response.data.subjects
          Store.setMovies(response.data.subjects)
        }, function (response) {
          // 这里是处理错误的回调
          console.log(response)
        });
      } else {
        console.log('use cached movies')
        this.movies = movies
      }
    },
    created() {
      console.log('Movie#Created')
    },
    destroyed() {
      console.log('Movie#Destroyed')
    },
    components: {}
  }
</script>

<style>

</style>
