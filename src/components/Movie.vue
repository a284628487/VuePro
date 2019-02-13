<template>
  <div id="movie">
    <h4 style="color: #20A0FF">豆瓣电影排行榜</h4>
    <div class="box-card">
      <div v-for="article in articles" class="text item">
        <router-link :to="{path:'/sub', query:{article: article}}">
          {{article.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Movie',
    data() {
      return {
        author: "Sky",
        articles: [],
      }
    },
    mounted() {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        this.articles = response.data.subjects
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      });
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
