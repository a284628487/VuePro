<template>
  <div class="hello">
    <h6>{{ msg }}</h6>
    <ul>
      <li v-for="af in hrefs">
        <a :href="af.href" target="_blank">{{af.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      hrefs: {
        type: Array,
        default: () => {
          var arr = []
          //
          arr.push({href: 'https://vuejs.org', name: 'Core Docs'})
          arr.push({href: 'https://forum.vuejs.org', name: 'Forum'})
          arr.push({href: 'https://chat.vuejs.org', name: 'Community Chat'})
          arr.push({href: 'https://twitter.com/vuejs', name: 'Twitter'})
          arr.push({href: 'http://vuejs-templates.github.io/webpack/', name: 'Docs for This Template'})
          //
          arr.push({href: 'http://router.vuejs.org/', name: 'vue-router'})
          arr.push({href: 'http://vuex.vuejs.org/', name: 'vuex'})
          arr.push({href: 'http://vue-loader.vuejs.org/', name: 'vue-loader'})
          arr.push({href: 'https://github.com/vuejs/awesome-vue', name: 'awesome-vue'})
          //
          return arr
        }
      }
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
