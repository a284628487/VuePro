<template>
  <div id="main">
    <div @click="divClick" :style="{color: authorColor}"> Written by {{ author }}</div>
    <div v-model="xxx"><span>{{$t('home.clickTime')}}</span>{{xxx}}</div>
    <ul>
      <li v-for="(item, index) in users" :key="'userKey' + index"
          v-bind:class='{single: index%2===0, double: index%2 === 1}'>{{item}}
      </li>
    </ul>
    <div :class="(progress>=100)?'full':'not-full'">
      <span>{{progressText}}</span><span v-if="progress==100">&nbsp;&nbsp;OK</span>
    </div>
    <div>
      <router-link to="/movie">{{movie}}</router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {mapGetters, mapState} from 'vuex'

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
        authorColor: '#ff4400',
        times: 0,
        movie: this.$t('home.movie')
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
          this.users.push('190212-')
          this.users.push('190213-')
        }
      },
      divClick() {
        this.times++
        this.xxx = this.times + ''
      }
    },
    created() {
      console.log('Home#created')
    },
    mounted() {
      this.tick()
      console.log('Home#mounted')
      this.times = parseInt(this.xxx)
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
        return this.progress + ''
      },
      xxx: {
        get() {
          return this.$store.state.xxx
        },
        set(newValue) {
          this.$store.commit('setXxx', newValue)
        }
      }
      // ...mapGetters([
      //   'xxx'
      // ])
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
