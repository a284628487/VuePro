<template>
  <div id="movie">
    <h4 style="color: #20A0FF">{{$t('movie.movieRank')}}</h4>
    <div class="box-card">
      <div v-for="(movie, index) in movies" v-bind:key="index" class="text item" :style="{height: '12rem'}">
        <router-link v-if="index%2 === 0" :to="{path:'/movieInformation', query:{movie: movie}}">
          <v-MovieItem :movie="movie"></v-MovieItem>
        </router-link>
        <router-link v-if="index%2 === 1" :to="{path:'/movieName/' + index}">
          <v-MovieItem :movie="movie"></v-MovieItem>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '../util/Store'
import MovieItem from './MovieItem'
import jsonData from '../assets/json/data.json'

export default {
  name: 'MovieList',
  data () {
    return {
      author: 'Sky',
      movies: []
    }
  },
  mounted () {
    let movies = Store.state.movies
    // 缓存数据为空
    if (movies.length === 0) {
      console.log('data by `import x from x` ', jsonData)
      // 获取本地json文件
      this.$http.get('./static/data.json')
        .then(response => {
          console.log('data by `$http.get` ', response.data)
        }, error => {
          console.log('data by `$http.get` error ', error.status)
        })
      // 获取电影列表
      this.getMovies()
    } else {
      console.log('use cached movies')
      this.movies = movies
    }
  },
  created () {
    console.log('MovieList#Created')
  },
  destroyed () {
    console.log('MovieList#Destroyed')
  },
  methods: {
    getMovies () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        this.movies = response.data.subjects
        Store.setMovies(response.data.subjects)
      }, function (response) {
        // 这里是处理错误的回调
        console.log('getMovies', response.status)
        let moviesArr = []
        moviesArr.push({
          title: '绝地求生'
        })
        moviesArr.push({
          title: '生化危机'
        })
        this.movies = moviesArr
        Store.setMovies(moviesArr)
      })
    }
  },
  components: {
    'v-MovieItem': MovieItem
  }
}
</script>

<style>

</style>
