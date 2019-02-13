<template>
  <div id="main">
    <div @click="divClick" :style="{color: authorColor}"> Written by {{ author }}</div>
    <ul>
      <li v-for="(item, index) in users" :key="'userKey' + index"
          v-bind:class='{single: index%2===0, double: index%2 === 1}'>{{item}}
      </li>
    </ul>
    <div :class="(progress>=100)?'full':'not-full'">
      <span>{{progressText}}</span><span v-if="progress==100">&nbsp;&nbsp;OK</span>
    </div>
    <div>
      <router-link to="/movie">Movie</router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Home',
    props: {
      'users': {
        type: Array, // String|Boolean|Object
        default: () => []
      },
      'author': {
        type: String,
        default: 'CCf'
      }
    },
    data() {
      return {
        progress: 0,
        authorColor: '#ff4400'
      }
    },
    methods: {
      tick() {
        this.progress += 1
        if (this.progress < 100) {
          setTimeout(() => {
            this.tick()
          }, 16)
        } else {
          this.users.push('190212')
          this.users.push('190213')
        }
      },
      divClick() {
        alert('ClickMe')
      }
    },
    created() {
      console.log('main#created')
    },
    mounted() {
      this.tick()
      console.log('main#mounted')
    },
    watch: {
      progress(newProgress) {
        if (newProgress % 20 == 0) {
          console.log('progressChanged: ' + newProgress)
        }
      }
    },
    computed: {
      progressText() {
        return this.progress + '%'
      }
    }
  }
</script>

<style scoped>
  .full {
    color: brown;
  }

  .not-full {
    color: aqua;
  }

  .single {
    color: cyan;
  }

  .double {
    color: chartreuse;
  }
</style>
