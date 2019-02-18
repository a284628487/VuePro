<template>
  <div id="movie">
    <h4 style="color: #20A0FF">{{$t('movie.movieRank')}}</h4>
    <div class="box-card">
      <div v-for="(movie, index) in movies" class="text item" :style="{height: '12rem'}">
        <router-link v-if="index%2 === 0" :to="{path:'/sub', query:{movie: movie}}">
          <v-MovieItem :movie="movie"></v-MovieItem>
        </router-link>
        <router-link v-if="index%2 === 1" :to="{path:'/detailSub/' + index}">
          <v-MovieItem :movie="movie"></v-MovieItem>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Store from '../assets/Store'
  import MovieItem from './MovieItem'

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
    components: {
      'v-MovieItem': MovieItem
    }
  }
</script>

<style>

</style>
