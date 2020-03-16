<template>
  <div id="main">
    <div @click="divClick" :style="{color: authorColor}"> Written by {{ author }}</div>
    <div><span>{{$t('home.clickTime')}}</span>{{clickTimes}}</div>
<!--    <div v-model="clickTimes"><span>{{$t('home.clickTime')}}</span>{{clickTimes}}</div>-->
    <h3>{{$t('home.userList')}}</h3>
    <ul>
      <li v-for="(item, index) in users" :key="'userKey' + index"
          v-bind:class='{single: index%2===0, double: index%2 === 1}'>{{item}}
      </li>
    </ul>
    <div :class="(progress>=100)?'full':'not-full'">
      <span>{{$t('home.loadProgress')}}{{progressText}}</span>
      <span v-if="progress === 100">&nbsp;Done</span>
      <span v-if="progress < 100">&nbsp;...</span>
    </div>
    <br/>
    <div>
      <router-link to="/movielist">{{movie}}<span class="iconfont icon-down"></span></router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
// import {mapGetters, mapState} from 'vuex'

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
  data () {
    return {
      progress: 0,
      authorColor: '#ff4400',
      times: 0
    }
  },
  methods: {
    tick () {
      this.progress += 5
      if (this.progress < 100) {
        setTimeout(() => {
          this.tick()
        }, 80)
      } else {
        this.users.push('TW-ccf')
        this.users.push('TW-yyn')
        this.users.push('TW-cjyn')
        this.users.push('TW-czn')
      }
    },
    divClick () {
      this.times++
      this.clickTimes = this.times + ''
      this.$cookies.set('clickTimes', this.times)
    }
  },
  created () {
    const times = this.$cookies.get('clickTimes')
    console.log('Home#created')
    if (times) {
      this.clickTimes = parseInt(times)
    }
  },
  destroyed () {
    this.$cookies.set('clickTimes', this.times)
  },
  mounted () {
    this.tick()
    console.log('Home#mounted')
    this.times = this.clickTimes
  },
  activated () {
    console.log('Home#activated')
  },
  watch: {
    progress (newProgress) {
      if (newProgress % 50 === 0) {
        console.log('progressChanged: ' + newProgress)
      }
    }
  },
  computed: {
    progressText () {
      return this.progress + ''
    },
    movie () {
      return this.$t('home.movie')
    },
    clickTimes: {
      get () {
        return this.$store.state.clickTimes
      },
      set (newValue) {
        this.$store.commit('setClickTimes', newValue)
      }
    }
    // ...mapGetters([
    //   'clickTimes'
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
    color: coral;
  }

  .double {
    color: chartreuse;
  }
</style>
