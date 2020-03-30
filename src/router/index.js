import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home'
import MovieList from '@/components/MovieList'
import MovieName from '@/components/MovieName'
import MovieContainer from '@/components/MovieContainer'
import Network from '@/components/Network'
import VueXState from '@/components/VueXState'
import VueXGetters from '@/components/VueXGetters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movielist',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/movieInformation',
      name: 'MovieContainer',
      component: MovieContainer
    },
    {
      path: '/movieName/:index',
      name: 'MovieName',
      component: MovieName
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/network',
      name: 'Network',
      component: Network
    },
    {
      path: '/vuexState',
      name: 'VueXState',
      component: VueXState
    },
    {
      path: '/vuexGetters',
      name: 'VueXGetters',
      component: VueXGetters
    }
  ]
})
