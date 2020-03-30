<template>
  <div id="main">
    <div @click="divClick" :style="{color: authorColor}"> Written by {{ author }}</div>
    <div><span>{{$t('home.clickTime')}}</span>{{clickTimes}}</div>
    <input v-model="clickTimes" type="text"/>
    <div v-show="clickTimes % 2 === 0">点击了整数次</div>
    <div v-show="clickTimes % 2 === 1">点击了奇数次</div>
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
    <div>
      <router-link to="/network">Network<span class="iconfont icon-down"></span></router-link>
    </div>
    <div>
      <router-link to="/vuexState">VueX-mapState<span class="iconfont icon-down"></span></router-link>
    </div>
    <div>
      <router-link to="/vuexGetters">VueX-mapGetters<span class="iconfont icon-down"></span></router-link>
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

  input {
    border: #42b983 1px solid;
    padding: 2px 4px;
  }
</style>
